import Checkout from "./Checkout"
import {useEffect, useState} from "react"
import CartCards from "./CartCards"

function Cart(){
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/cart')
        .then(r => r.json())
        .then(cartItems => setCart(cartItems))
    }, [])

    const cartItemsList = cart.map(item => <CartCards key={item.title} title={item.title} price={item.price} image={item.image} rating={item.rating.rate}/>)

    return(
        <>
            <div>
                {cartItemsList} 
            </div>
        </>
    );
}

export default Cart