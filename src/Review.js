import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review({formData, cart, totalPrice}) {

  const { firstName, lastName, address1, address2, city, state, zip, cardName, cardNumber} = formData
  const lastFourDigits = cardNumber.substr(-4)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
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
