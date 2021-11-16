import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
import {useEffect, useState} from "react"

function MainPage(){
    const [items, setItems] = useState([])
    const[copyOfItems, setCopyOfItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(itemsArray => {
            setItems(itemsArray)
            setCopyOfItems(itemsArray)
        })
    }, [])

    return(
        <div>
        <ItemContainer items = {items} />
        <Sort />
        <Cart />
        <Filter />
        </div>
    )
}

export default MainPage