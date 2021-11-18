import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { CartContext } from './context/cartState';
import CartCards from './CartCards';



export default function OrderHistory() {

    const {cart, setCart} = useContext(CartContext)

    const cartItems = cart.map(item => <CartCards title={item.title} price={item.price} image={item.image} rating={item.rating.rate} description = {item.description}/>)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ 
            bgcolor: '#f9f9f9', 
            height: '100vh', 
            margin: 10,
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .2)'
            }} 
        >
            <h1 style={{"textAlign": "center"}}>Order History</h1>
            {cartItems}
        </Box>
      </Container>
    </React.Fragment>
  );
}
