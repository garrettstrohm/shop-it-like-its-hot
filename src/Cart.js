

import { Typography } from "@mui/material"

import Button from '@mui/material/Button';

import { useContext} from "react"
import CartCards from "./CartCards"
import {CartContext} from './context/cartState'
import { Link } from 'react-router-dom';


function Cart(){
    const {cart, setCart} = useContext(CartContext)
    
    const cartItemsList = cart.map(item => <CartCards key={item.title} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} description={item.description} handleDelete={handleDelete} setCart={setCart}/>)

    function handleDelete(id){
        fetch(`http://localhost:4000/cart/${id}`, {method: "DELETE"})
        const updatedItemList = cart.filter((item) => item.id !== id)
        setCart(updatedItemList)
    }

   

    return(
        <>
            <div>
                <Typography>
                    <h1 style={{display:'flex', justifyContent:'center'}}>View Your Cart</h1>
                </Typography>
                <hr style={{borderColor:'#1976d2'}}/>
                {cartItemsList} 
            </div>
            <Link to="/checkout" style={{textDecoration: 'none'}}><Button variant="contained">Proceed to Checkout</Button></Link>
        </>
    );
}

export default Cart