import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filter({handleCategoryChange}){


    return (
        <Box mt={2} ml={210} sx={{ 
            minWidth: 120, 
            maxWidth: 200,
            }}>
                
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
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