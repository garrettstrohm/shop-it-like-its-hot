import ItemCards from "./ItemCards"


function ItemContainer({items, sendToCart}){

    const displayItems = items.map(item => <ItemCards key = {item.id} id = {item.id} title = {item.title} description = {item.description} price = {item.price} category = {item.category} image = {item.image} ratingObj = {item.rating} sendToCart ={sendToCart}/>)

    return(
        <div>
            {displayItems}
        </div>
    )
}

export default ItemContainer