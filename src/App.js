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
        .then(cartItems => setCart(cartItems))
    }, [])

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch}/>
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
          <ItemDetails />
        </Route>
        <Route path="/">
          <MainPage search={search}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
