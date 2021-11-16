import ItemCards from "./ItemCards"

function ItemContainer({items}){

    const displayItems = items.map(item => <ItemCards key = {item.id} title = {item.title} description = {item.description} price = {item.price} category = {item.category} image = {item.image} ratingObj = {item.rating} />)

    return(
        <div>
            {displayItems}
        </div>
    )
}

export default ItemContainer