import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Meals/Foods";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
     const[cartShow,setCartShow] = useState(false)
   
   const showCartHandler = ()=>{
    setCartShow(true)
   }

   const hideCarttHandler = ()=>{
    setCartShow(false)
   }

  return (
    <CartProvider>
    {cartShow && <Cart onClose={hideCarttHandler}/>}
      <Header onCartShow={showCartHandler}/>
      <main>
      <Foods/>
       </main>
   </CartProvider>
  );
}

export default App;
