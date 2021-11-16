import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
import NavBar from './NavBar'
import {useEffect, useState} from "react"
import NavBar from "./NavBar.js"

function MainPage(){
    const [items, setItems] = useState([])
    const[copyOfItems, setCopyOfItems] = useState([])
    const [search, setSearch] = useState("")
    const[categorySelect, setCategorySelect] = useState("All")
    
    console.log(search)

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(r => r.json())
        .then(itemsArray => {
            setItems(itemsArray)
            setCopyOfItems(itemsArray)
        })
    }, [])


    const itemsToDisplay = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).filter((item) => {
        if(categorySelect === "All") return true;
        return item.category === categorySelect
    })

 function sendToCart() {
        console.log("Sending to Cart")
    }

    
    function handleCategoryChange(event){
        setCategorySelect(event.target.value)
    }



    return(
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <Filter handleCategoryChange={handleCategoryChange}/>
            <ItemContainer items = {itemsToDisplay} sendToCart = {sendToCart} />
            <Sort />
            <Cart />
        </div>
    )
}

export default MainPage