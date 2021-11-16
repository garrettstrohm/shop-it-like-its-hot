import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NewFilter({handleCategoryChange}) {
  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
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

export default NewFilter

//                 <select name="catFilter" onChange={handleCategoryChange}>
// //         //         <option value="All">Filter by category</option>
// //         //         <option value="men's clothing">Men's Clothing</option>
// //         //         <option value="jewelery">Jewelery</option>
// //         //         <option value="electronics">Electronics</option>
// //         //         <option value="women's clothing">Women's Clothing</option>
// //         //     </select>