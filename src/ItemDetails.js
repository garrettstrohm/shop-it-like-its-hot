import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {useParams} from 'react-router-dom'
import useFetch from './hooks/useFetch'
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';



export default function ItemDetails(){
    const itemId = useParams().id

    // const {content, isLoaded} = useFetch(`http://localhost:4000/products/${itemId}`)
    // const {title, price, description, category, image, rating} = content



    // if(!isLoaded) return <div>Loading...</div>
    return(
        <div>
            <br/>
            <Card variant="outlined" style = {{backgroundColor: '#ffffff', paddingLeft: '15px', paddingBottom: '15px', paddingRight: '15px', boxShadow: "1px 3px 6px 2px #9E9E9E"}}>
            <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt="place" style = {{width: '25%', height: '25%'}}/>

            <Card variant="outlined" style = {{backgroundColor: '#3E76D2', paddingLeft: '15px', paddingBottom: '15px', boxShadow: "1px 3px 6px 2px #9E9E9E" }}>
                <Typography>
                    <h1>Description:</h1>
                     <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                     <h2>Price: $109.95</h2> 
                     <h2>Rating: 3.9 ⭐️ </h2>
                     <Stack direction='row' spacing={2}>
                         <Button color="primary" variant="contained" aria-label="add to shopping cart">
                             <AddShoppingCartIcon />
                         </Button>
                        <Button variant="contained">Buy Now</Button>
                     </Stack>
                </Typography>
            </Card>
           </Card>           
        </div>
    );
}

