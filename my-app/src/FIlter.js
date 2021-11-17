import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filter({handleCategoryChange}){


    return (
        <Box  sx={{ 
            minWidth: 200,
            display: 'flex',
            justifyContent: 'flex-end',
            p: 1,
            m: 1,
            }}>
                
          <FormControl style={{boxShadow: ".5px 1px 8px .5px #9E9E9E"}}>
            <InputLabel sx={{minWidth:150}} id="demo-simple-select-label">Category</InputLabel>
            <Select
              sx={{minWidth:150}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              onChange={handleCategoryChange}
            >
              {/* <MenuItem value="Select A Category"><em>Select a category...</em></MenuItem> */}
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