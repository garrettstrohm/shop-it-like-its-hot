
import { useContext} from "react"
import CartCards from "./CartCards"
import {CartContext} from './context/cartState'

function Cart(){
    const {cart} = useContext(CartContext)
    
    const cartItemsList = cart.map(item => <CartCards key={item.title} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} description={item.description}/>)

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