import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
import {useEffect, useState} from "react"
import NavBar from './NavBar'

function MainPage(){
    const [items, setItems] = useState([])
    const[copyOfItems, setCopyOfItems] = useState([])
    const [search, setSearch] = useState("")
    const[categorySelect, setCategorySelect] = useState("All")

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(itemsArray => {
            setItems(itemsArray)
            setCopyOfItems(itemsArray)
        })
    }, [])

    function handleCategoryChange(event){
        setCategorySelect(event.target.value)
    }

    const itemsToDisplay = items.filter((item) => {
        if(categorySelect === "All") return true;
        return item.category === categorySelect
    })



    return(
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <Filter handleCategoryChange={handleCategoryChange}/>
            <ItemContainer items = {itemsToDisplay} />
            <Sort />
            <Cart />
        </div>
    )
}

export default MainPage