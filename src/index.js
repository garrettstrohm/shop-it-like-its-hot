import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import {OrderHistoryProvider} from "./context/OrderHistoryState"
import {OrderNumberProvider} from "./context/orderNumber"
import { CartProvider } from "./context/cartState"

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








