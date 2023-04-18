import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Meals/Foods";

import Cart from "./components/Cart/Cart";
function App() {
 
   const[cartShow,setCartShow] = useState(false)
   
   const showCartHandler = ()=>{
    setCartShow(true)
   }

   const hideCarttHandler = ()=>{
    setCartShow(false)
   }

  return (
    <>
    {cartShow && <Cart onClose={hideCarttHandler}/>}
      <Header onCartShow={showCartHandler}/>
      <main>
      <Foods/>
         </main>
    </>
  );
}

export default App;
