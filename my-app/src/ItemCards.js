import ItemDetails from "./ItemDetails"

function ItemCards({title, price, description, category, image, ratingObj}){
    return(
        <>
        <div>
            <h1>{title}</h1>
            <img src = {image} alt = "imageAlt"/>
            <h2>{price}</h2>
            <h3>{ratingObj.rate}</h3>
        </div>
        </>
    )
}

export default ItemCards