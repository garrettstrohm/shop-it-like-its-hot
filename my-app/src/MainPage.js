import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
import NavBar from './NavBar'
import {useEffect, useState} from "react"

function MainPage(){
    const [items, setItems] = useState([])
    const[copyOfItems, setCopyOfItems] = useState([])
    const [search, setSearch] = useState("")
  

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(itemsArray => {
            setItems(itemsArray)
            setCopyOfItems(itemsArray)
        })
    }, [])


    function sendToCart() {
        console.log("Sending to Cart")
    }

    return(
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <ItemContainer items = {items} sendToCart = {sendToCart} />
            <Sort />
            <Cart />
            <Filter />
        </div>
    )
}

export default MainPage