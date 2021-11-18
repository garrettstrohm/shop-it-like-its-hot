import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import { OrderHistoryContext } from './context/OrderHistoryState';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function OrderHistory() {

    const {orderHistory, setOrderHistory} = useContext(OrderHistoryContext)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        fetch('http://localhost:4000/orderHistory')
        .then(r => r.json())
        .then(data => {
            setOrderHistory(data)
            setIsLoaded(true)
        })
    }, [setOrderHistory])

    const orderHistoryProducts = orderHistory.products
  
    function createTotalPrice(){
        let total = 0;
        for(let i = 0; i < orderHistoryProducts.length; i++) {
          total += orderHistoryProducts[i].price;
        }
        return total;
      }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ 
            bgcolor: '#f9f9f9', 
            height: '100vh',
            width: '80vh', 
            margin: 10,
            padding: 5,
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .2)'
            }} 
        >   
            <h1 style={{"textAlign": "center"}}>Order History</h1>
            {isLoaded ? <List disablePadding>
                {orderHistoryProducts.map((product) => (
                    <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
                    <img style={{height: 125, width: 200, margin: 20}} src={product.image} alt={product.title} />
                    <ListItemText primary={product.title} secondary={product.description} />
                <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${createTotalPrice()}
          </Typography>
        </ListItem>
      </List> : <h1>Loading...</h1>} 
        </Box>
      </Container>
    </React.Fragment>
  );
}
