import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import newFilter from './newFilter'
import NavBar from './NavBar'
import {useEffect, useState} from "react"

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

    const itemsToDisplay = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).filter((item) => {
        if(categorySelect === "All") return true;
        return item.category === categorySelect
    })
    
    function handleCategoryChange(event){
        setCategorySelect(event.target.value)
    }



    return(
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <newFilter handleCategoryChange={handleCategoryChange}/>
            <ItemContainer items = {itemsToDisplay} />
            <Sort />
            <Cart />
        </div>
    )
}

export default MainPage