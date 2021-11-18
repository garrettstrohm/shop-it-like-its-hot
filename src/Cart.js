
import { useContext} from "react"
import CartCards from "./CartCards"
import {CartContext} from './context/cartState'

function Cart(){
    const {cart} = useContext(CartContext)
    
    const cartItemsList = cart.map(item => <CartCards key={item.title} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} description={item.description} handleDelete={handleDelete} setCart={setCart}/>)

    function handleDelete(id){
        fetch(`http://localhost:4000/cart/${id}`, {method: "DELETE", headers:{"Content-type": "application/json"}})
        .then(r => r.json())
        .then(() => updateItemList(id))
      
    }

    function updateItemList(id){
        const updatedItemList = cart.filter((item) => item.id !== id)
        setCart(updatedItemList)
    }

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