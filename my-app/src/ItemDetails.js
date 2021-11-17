import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemDetails(){
    return(
        <div>
            <header>Header</header>
            <img src="http://placehold.it" alt="place"/>
            <Stack direction='row' spacing={1}>
            <Button color="primary" aria-label="add to shopping cart">
                 <AddShoppingCartIcon />
            </Button>
            <button>Buy Now</button>
            </Stack>
        </div>
    );
}

