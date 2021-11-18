import {createContext, useState } from 'react'

const OrderHistoryContext = createContext();

function OrderHistoryProvider({children}) {
    const [orderHistory, setOrderHistory] = useState({})
    return <OrderHistoryContext.Provider value={{orderHistory, setOrderHistory}}>{children}</OrderHistoryContext.Provider>
}

export {OrderHistoryContext, OrderHistoryProvider}