import React, { useContext, useState } from "react";

import classes from './InputForm.module.css';
import CartContext from "../../../store/cart-context";


const InputForm = (props) =>{

  const [itemQuantity,setItemQuantity] = useState('1')
 
    const quantityHandler =(event)=>{
       setItemQuantity(event.target.value)
    }


  const cartctx = useContext(CartContext);
 
    // console.log(props)
  // console.log('reintialized cartcntx',cartctx)
  const addItemToCart = (event)=>{
    event.preventDefault();
    
    const item ={
      name:props.item.name,
      id:props.id,
      price:props.item.price,
      amount:parseInt(itemQuantity)
    }
     
     cartctx.addItem(item)
  }

  return (
    <form className={classes.form}>
  {console.log('inside reder',cartctx.items)}
    <div className={classes.input}>
    <label htmlFor={props.id}>Amount</label>
   
      <input 
       id={props.id}
       type="number"
       max='5'
       min='1'
      
       onChange={quantityHandler}
       value={itemQuantity}

      />
      </div>
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default InputForm;