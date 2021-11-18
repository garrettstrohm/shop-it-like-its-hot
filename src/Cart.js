import Checkout from "./Checkout"
import {useEffect, useState, useContext} from "react"
import CartCards from "./CartCards"
import {CartContext} from './context/cartState'

function Cart(){
    const {cart, setCart} = useContext(CartContext)
    
    useEffect(() => {
        fetch('http://localhost:4000/cart')
        .then(r => r.json())
        .then(cartItems => setCart(cartItems))
    }, [])

    const cartItemsList = cart.map(item => <CartCards key={item.title} title={item.title} price={item.price} image={item.image} rating={item.rating.rate}/>)

    return(
        <>
            <div>
                <h1>Cart</h1>
                {cartItemsList} 
            </div>
        </>
    );
}

export default Cart