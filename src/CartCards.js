import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';

export default function CartCards({title, price, image, rating, description, id, handleDelete}) {
  console.log(description)

  return (
    <Card style= {{backgroundColor: '#ffffff', marginBottom: '10px', marginLeft: '10px', boxShadow: "1px 3px 6px 2px #9E9E9E"}}sx={{ display: 'flex', padding: '10px'}}>
            <CardMedia
            component="img"
            sx={{ width: 150 }}
            image={image}
            alt="imgAlt"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth:500, maxHeight:50}}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end', mr:3,  pl: 1, pb: 1 }}>
              <Button variant="outlined" sx={{}} onClick={()=> handleDelete(id)}>Remove From Cart</Button>
            </Box>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography style={{backgroundColor: '#ffffff', color:'#adb3ab', paddingLeft: '15px'}}>{description}</Typography>
        </Card>
  );
}
