import React from "react";
import Header from "./components/Layout/Header";
import Foods from "./components/Meals/Foods";

import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Header/>
      <Cart/>
      <main>
      <Foods/>
         </main>
    </>
  );
}

export default App;
