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
import Card from '@mui/material/Card';
import { OrderNumberContext } from './context/orderNumber';




export default function OrderHistory() {

    const {orderHistory, setOrderHistory} = useContext(OrderHistoryContext)
    const {orderNumber} = useContext(OrderNumberContext)
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
        return parseFloat(total).toFixed(2);
      }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        
        <Box sx={{ 
            bgcolor: '#f9f9f9', 
            height: '100vh',
            width: '50vw', 
            margin: 10,
            marginTop: '185px',
            padding: 5,
            boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, .2)'
            }} 
        >   
            <h1 style={{"textAlign": "center", color: "#2A3459"}}>Order History</h1>
            <h3 style={{color: "#2A3459"}}>Order Number: #{orderNumber}</h3>
            {isLoaded ? <List disablePadding>
              <Card style = {{padding: "20px", boxShadow: "1px 3px 6px 2px #9E9E9E"}}>
                {orderHistoryProducts.map((product) => (
                  
                    <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
                    <img style={{height: 'auto', width: '15%', margin: 20}} src={product.image} alt={product.title} />
                    <ListItemText primary={product.title} secondary={product.description} />
                <Typography variant="body2">${product.price}</Typography>
          </ListItem>
          
        ))}
           
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText style={{color: "#2A3459"}} primary="Total" />
          <Typography style={{color: "#2A3459"}} variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${createTotalPrice()}
          </Typography>
        </ListItem>
        </Card>
      </List> : <h1>Loading...</h1>} 
      
        </Box>
       
      </Container>
    </React.Fragment>
  );
}
