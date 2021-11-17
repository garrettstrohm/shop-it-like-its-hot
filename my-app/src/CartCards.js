import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

export default function CartCards({title, price, image, rating}) {
  return (
    <Card style= {{backgroundColor: '#ffffff', border: '1px solid #1976D2', marginBottom: '10px', marginLeft: '10px', boxShadow: "1px 3px 6px 2px #9E9E9E"}}sx={{ display: 'flex', padding: '10px'}}>
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
                {rating}⭐️ 
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
        </Card>
  );
}
