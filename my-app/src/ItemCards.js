import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemDetails from "./ItemDetails"
import Cart from "./Cart"
import { borderRadius } from '@mui/system';

export default function ItemCards({title, price, description, category, image, ratingObj, sendToCart}){
   

    return(
      <Card style={{backgroundColor: '#ffffff', border: '1px solid #1976D2', borderRadius: '10px', margin:'10px'}} sx={{display: 'flex', padding: '10px' }}>
      <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image}
            alt="imgAlt"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                 ${price} 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {ratingObj.rate}⭐️ 
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
          
        </Card>
      );
}

