import ItemContainer from './ItemContainer'
import Sort from './Sort'
import Cart from './Cart'
import Filter from './Filter'
import {useEffect, useState} from "react"

function MainPage(){
    const [products, setProducts] = useState([])
    const[copyOfProducts, setCopyOfProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(productsArray => {
            setProducts(productsArray)
            setCopyOfProducts(productsArray)
        })
    }, [])

    return(
        <div>
        <ItemContainer />
        <Sort />
        <Cart />
        <Filter />
        </div>
    )
}

export default MainPage