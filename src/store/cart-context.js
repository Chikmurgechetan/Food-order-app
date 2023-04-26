import React from "react";

const CartContext =  React.createContext({
    items: [],
    addItem: () =>{},
    removeItem: () =>{},
    updateItem: ()=>{}
})

export default CartContext;