import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './assets/lastLogo.gif'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar({search, setSearch}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{boxShadow: "1px 3px 6px 2px #9E9E9E", backgroundColor: '#2A3459'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
            {/* <img src= { logo } alt='mlimg' style = {{width: '250px', height: '80px'}}/> */}
            <img src= { logo } alt='mlimg' style = {{width: '250px', height: '110px', position: 'relative', bottom: '20px'}}/>
            

          </Typography>
          
          <Stack direction="row" spacing={2}>
            <Link style={{textDecoration: 'none'}} to="/"><Button sx={{color: "#e57c70", borderColor:"#e57c70"}} variant="outlined">Home</Button></Link>
            <Link style={{textDecoration: 'none'}} to="/cart"><Button  sx={{color: "#e57c70", borderColor:"#e57c70"}} variant="outlined">View Cart</Button></Link>
            <Link style={{textDecoration: 'none'}} to="/orderhistory"><Button sx={{color: "#e57c70", borderColor:"#e57c70"}} variant="outlined">Order History</Button></Link>
          </Stack>
         
          <Search style ={{color:'#e57c70'}}  value={search} onChange={(e) => setSearch(e.target.value)}>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

