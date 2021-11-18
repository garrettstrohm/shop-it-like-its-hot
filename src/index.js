import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { CartProvider } from "./context/cartState"
import {OrderHistoryProvider} from "./context/OrderHistoryState"
import {OrderNumberProvider} from "./context/orderNumber"

ReactDOM.render(
  <BrowserRouter>
  <OrderNumberProvider>
  <OrderHistoryProvider>
  <CartProvider>
    <App />
  </CartProvider>
  </OrderHistoryProvider>
  </OrderNumberProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


