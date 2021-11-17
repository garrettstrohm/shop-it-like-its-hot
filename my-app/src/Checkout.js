import * as React from 'react';
import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Cart from './Cart';




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        
      Shop It Like It's Hot
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [products, setProducts] = useState([])
  const [orderHistory, setOrderHistory] = useState([])
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": "",
    "address1": "",
    "address2": "",
    "city": "",
    "state": "",
    "zip": "",
    "country": "",
    "cardName": "",
    "cardNumber": "",
    "expDate": "",
    "ccv": ""
  })


  useEffect(() => {
    fetch('http://localhost:4000/cart')
    .then(r => r.json())
    .then(productsInCart => {
      setProducts(productsInCart)
    })
  }, [])

  function createTotalPrice(){
    let total = 0;
    for(let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }

  function handleSubmit(formData){
    fetch('http://localhost:4000/user/1', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(user => setFormData(user))
  }

  function deleteCartItems(item){
    fetch(`http://localhost:4000/cart/${item.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(console.log)
  }

  function emptyCart(products){
    for(let i = 0; i < products.length; i++) {
      deleteCartItems(products[i])
    }
  }

  function postToOrderHistory(){

    fetch('http://localhost:4000/orderHistory', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: formData,
        products: products,
      })
    })
    .then(r => r.json())
    .then(data => setOrderHistory(data))
  }

  const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {

  switch (step) {
    case 0:
      return <AddressForm formData={formData} setFormData={setFormData} />;
    case 1:
      return <PaymentForm formData={formData} setFormData={setFormData}/>;
    case 2:
      return <Review formData={formData} products={products} totalPrice={createTotalPrice}/>;
    default:
      throw new Error('Unknown step');
  }
}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep < 2){
      handleSubmit(formData)
    } else {
      postToOrderHistory(products)
      handleSubmit({
        "firstName": "",
        "lastName": "",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zip": "",
        "country": "",
        "cardName": "",
        "cardNumber": "",
        "expDate": "",
        "ccv": ""
      })
      emptyCart(products)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}