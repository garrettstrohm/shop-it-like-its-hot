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
                
          <FormControl style={{boxShadow: ".5px 1px 8px .5px #9E9E9E", borderColor: '#e57c70'}}>
            <InputLabel sx={{minWidth:150}} style ={{color:'#e57c70'}} id="demo-simple-select-label">Category</InputLabel>
            <Select
              sx={{minWidth:150}}
              style ={{color:'#e57c70'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              defaultValue="All"
              onChange={handleCategoryChange}
            >
              {/* <MenuItem value="Select A Category"><em>Select a category...</em></MenuItem> */}
              <MenuItem style ={{color:'#e57c70'}} value="All">All</MenuItem>
              <MenuItem style ={{color:'#e57c70'}} value="men's clothing">Men's Clothing</MenuItem>
              <MenuItem style ={{color:'#e57c70'}} value="jewelery">Jewelery</MenuItem>
              <MenuItem style ={{color:'#e57c70'}} value="electronics">Electronics</MenuItem>
              <MenuItem style ={{color:'#e57c70'}} value="women's clothing">Women's Clothing</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
    }

    


export default Filter