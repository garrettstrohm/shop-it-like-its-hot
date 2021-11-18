import {createContext, useState } from 'react'

const OrderNumberContext = createContext();

function OrderNumberProvider({children}) {
    const [orderNumber, setOrderNumber] = useState([])
    return <OrderNumberContext.Provider value={{orderNumber, setOrderNumber}}>{children}</OrderNumberContext.Provider>
}

export {OrderNumberContext, OrderNumberProvider}