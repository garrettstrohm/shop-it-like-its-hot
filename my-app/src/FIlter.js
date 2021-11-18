import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filter({handleCategoryChange}){


    return (
        <Box m={2} sx={{ 
            
            display: 'flex',
            justifyContent: 'flex-end',
            
            }}>
                
          <FormControl >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              sx={{
                minWidth: 200
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              onChange={handleCategoryChange}
            >
  
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="men's clothing">Men's Clothing</MenuItem>
              <MenuItem value="jewelery">Jewelery</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="women's clothing">Women's Clothing</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
    }

    


export default Filter