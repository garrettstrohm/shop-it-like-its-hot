
import React, {useState, useContext, useEffect} from 'react'
import MainPage from './MainPage'
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Cart from './Cart'
import Checkout from './Checkout';
import ItemDetails from './ItemDetails'
import OrderHistory from './OrderHistory';
import { CartContext } from './context/cartState';


function App() {
  const [search, setSearch] = useState("")
  const {cart, setCart} = useContext(CartContext)

  useEffect(() => {
    fetch('http://localhost:4000/cart')
    .then(r => r.json())
    .then(items => setCart(items))
  }, [setCart])


  function sendToCart(id) {
    console.log("id:",id)
    fetch(`http://localhost:4000/products/${id}`)
    .then(r => r.json())
    .then(item => {
        console.log(item)
        setCart([...cart, item])
        fetch('http://localhost:4000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        })
    })
}

  return (
    <div className="App">
      <NavBar search={search} onChangePage={setSearch}/>
      <Switch>
        <Route path="/orderhistory">
          <OrderHistory />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/itemdetails/:id">
          <ItemDetails sendToCart = {sendToCart}/>
        </Route>
        <Route path="/">
          <MainPage search={search} sendToCart = {sendToCart}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
