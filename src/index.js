import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { CartProvider } from "./context/cartState"
import {OrderHistoryProvider} from "./context/OrderHistoryState"

ReactDOM.render(
  <BrowserRouter>
  <OrderHistoryProvider>
  <CartProvider>
    <App />
  </CartProvider>
  </OrderHistoryProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


