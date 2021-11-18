import React, {useState} from 'react'
import MainPage from './MainPage'
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Cart from './Cart'
import Checkout from './Checkout';
import ItemDetails from './ItemDetails'

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <NavBar search={search} onChangePage={setSearch}/>
      <Switch>
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
