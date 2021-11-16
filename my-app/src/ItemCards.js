import ItemDetails from "./ItemDetails"
import Cart from "./Cart"



function ItemCards({title, price, description, category, image, ratingObj, sendToCart}){

    

    return(
        <>
        <div>
            <h1>{title}</h1>
            <img src = {image} alt = "imageAlt"style = {{maxHeight: 100, maxWidth: 100}}/>
            <h2>${price} </h2>
            <h3>{ratingObj.rate}⭐️</h3>
            <button onClick= {sendToCart}>Add To Cart</button>
            
        </div>
        </>
    )
}

export default ItemCards