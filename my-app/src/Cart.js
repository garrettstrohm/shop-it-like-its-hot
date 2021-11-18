
import Checkout from "./Checkout"
import {useEffect, useState, createContext} from "react"
import CartCards from "./CartCards"

const CartContext = createContext()



function Cart({children}){
    const [cart, setCart] = useState([])
   return <CartContext.Provider value = {{cart,setCart}}>{children}</CartContext.Provider>
   
    
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