import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
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

    return(
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <ItemContainer />
            <Sort />
            <Cart />
            <Filter />
        </div>
    )
}

export default MainPage