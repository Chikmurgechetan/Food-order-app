import React, { useContext } from "react";
import Input from "./Input";
import classes from './InputForm.module.css';
import CartContext from "../../../store/cart-context";


const InputForm = (props) =>{

  const cartctx = useContext(CartContext);
  console.log('reintialized cartcntx',cartctx)
  const addItemToCart = (event)=>{
    event.preventDefault();
   
    const quantity = document.getElementById("amount_" +props.id).value
    console.log(quantity,'----quantity')
    cartctx.addItem({...props.item, quantity: quantity})
    
    console.log('after addItemToCart',cartctx);
   
  }
  return (
    <form className={classes.form}>
    {console.log('inside reder',cartctx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default InputForm;