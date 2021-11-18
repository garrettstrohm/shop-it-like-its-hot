import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Filter from './Filter'
import {useEffect, useState} from "react"


function MainPage({search, sendToCart}){
    const [items, setItems] = useState([])
    const[categorySelect, setCategorySelect] = useState("All")

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(r => r.json())
        .then(itemsArray => {
            setItems(itemsArray)
        })
    }, [])


    const itemsToDisplay = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).filter((item) => {
        if(categorySelect === "All") return true;
        return item.category === categorySelect
    })

    
    function handleCategoryChange(event){
        setCategorySelect(event.target.value)
    }



    return(
        <div>
            <Filter handleCategoryChange={handleCategoryChange}/>
            <ItemContainer items = {itemsToDisplay} sendToCart = {sendToCart} />
            <Sort />
        </div>
    )
}

export default MainPage