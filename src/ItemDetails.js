import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {useParams} from 'react-router-dom'
import useFetch from './hooks/useFetch'
import Typography from '@mui/material/Typography'; 
import CardHeader from '@mui/material/CardHeader';



export default function ItemDetails({sendToCart}){
    const itemId = useParams().id

    const {content, isLoaded} = useFetch(`http://localhost:4000/products/${itemId}`)
    const {title, price, description, category, image, rating, id} = content


    if(!isLoaded) return <div>Loading...</div>
    return(
        <div>
            <br/>
            <Card variant="outlined" style = {{backgroundColor: '#ffffff', paddingLeft: '15px', paddingBottom: '15px', paddingRight: '15px', boxShadow: "1px 3px 6px 2px #9E9E9E"}}>
            <h1>{title}</h1>
            <img src={image} alt="place" style = {{width: '25%', height: '25%'}}/>

            <Card variant="outlined" style = {{backgroundColor: '#3E76D2', paddingLeft: '15px', paddingBottom: '15px', boxShadow: "1px 3px 6px 2px #9E9E9E" }}>
                <Typography>
                    <h1>Description:</h1>
                     <p>{description}</p>
                     <h2>Price: ${price}</h2> 
                     <h2>Rating: {rating.rate} ⭐️ </h2>
                     <Stack direction='row' spacing={2}>
                         <Button onClick = {()=>sendToCart(id)} color="primary" variant="contained" aria-label="add to shopping cart">
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

