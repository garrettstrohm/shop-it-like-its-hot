import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review({formData, products, totalPrice}) {
  // const [products, setProducts] = useState([])
  // const [total, setTotal] = useState(0)
  const { firstName, lastName, address1, address2, city, state, zip, country, cardName, cardNumber, expDate, ccv} = formData
  const lastFourDigits = cardNumber.substr(-4)

  // useEffect(() => {
  //   fetch('http://localhost:4000/cart')
  //   .then(r => r.json())
  //   .then(productsInCart => setProducts(productsInCart))
  // }, [])
  // {
  //   "id": 20,
  //   "title": "DANVOUY Womens T Shirt Casual Cotton Short",
  //   "price": 12.99,
  //   "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  //   "category": "women's clothing",
  //   "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //   "rating": {
  //     "rate": 3.6,
  //     "count": 145
  //   }
  // }

  
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <img style={{height: 125, width: 200, margin: 20}} src={product.image} alt={product.title} />
            <ListItemText primary={product.title} secondary={product.description} />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName} {lastName}</Typography>
          <Typography gutterBottom>{address1} {address2},</Typography>
          <Typography gutterBottom>{city}, {state} {zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment key={firstName}>
                <Grid item xs={12}>
                  <Typography gutterBottom>Name on Card: {cardName}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>Card Number: XXXX-XXXX-XXXX-{lastFourDigits}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// {
  //   "id": 1,
  //   "firstName": "",
  //   "lastName": "",
  //   "address1": "",
  //   "address2": "",
  //   "city": "",
  //   "state": "",
  //   "zip": "",
  //   "country": "",
  //   "cardName": "",
  //   "cardNumber": "",
  //   "expDate": "",
  //   "ccv": ""
  // }
  // const products = [
  //   {
  //     name: 'Product 1',
  //     desc: 'A nice thing',
  //     price: '$9.99',
  //   },
  //   {
  //     name: 'Product 2',
  //     desc: 'Another thing',
  //     price: '$3.45',
  //   },
  //   {
  //     name: 'Product 3',
  //     desc: 'Something else',
  //     price: '$6.51',
  //   },
  //   {
  //     name: 'Product 4',
  //     desc: 'Best thing of all',
  //     price: '$14.11',
  //   },
  //   { name: 'Shipping', desc: '', price: 'Free' },
  // ];
  
  // const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
  // const payments = [
  //   { name: 'Card type', detail: 'Visa' },
  //   { name: 'Card holder', detail: 'Mr John Smith' },
  //   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  //   { name: 'Expiry date', detail: '04/2024' },
  // ];