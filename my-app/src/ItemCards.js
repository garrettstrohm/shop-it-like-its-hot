import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import ItemDetails from "./ItemDetails"
import Cart from "./Cart"
import {Route, Switch, Link} from 'react-router-dom'

export default function ItemCards({title, price, description, category, image, ratingObj, sendToCart, id}){

 


    return(
      

        <Card style= {{backgroundColor: '#ffffff', marginBottom: '10px', marginLeft: '10px', boxShadow: "1px 3px 6px 2px #9E9E9E"}} sx={{ display: 'flex', padding: '10px'}}>

            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image}
            alt="imgAlt"
          />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Switch>  
              <Link to={`/itemdetails/${id}`} style= {{textDecoration: 'none', color:'#000000'}}variant="h5">  
                {title}
              </Link>
              </Switch>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                 ${price} 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {ratingObj.rate}⭐️ 
              </Typography>
              <br/>
              <Button onClick = {sendToCart} variant="contained">
              <AddShoppingCartIcon  />  Add to Cart  
              </Button>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography style={{backgroundColor: '#ffffff', color:'#adb3ab', paddingLeft: '15px'}}>{description}</Typography>
        </Card>
      );
}


