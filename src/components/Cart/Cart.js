import React, { useContext } from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) =>{
    
  const cartcnx = useContext(CartContext);
 
    console.log(cartcnx.cartItems,'som=======')

       const cartItemRemoveHandler = (id) =>{
           
      }

     const CartItemAddHandler = (id) =>{
         cartcnx.updateItem(id)
       }


   const cartItems=(
       <ul className={classes["cart-items"]}>
       {
      cartcnx.cartItems.map((item)=>(
       <li className={classes['cart-item']} key={item.id}>
    <div >
        <h2>{item.name}</h2>
    <div className={classes.summary}>
     <span className={classes.price}>${item.price}</span>
     <span className={classes.quantity}> x {item.amount}</span>
   </div>
      </div>
     
       <div className={classes.actions}>
          <button onClick={()=>cartItemRemoveHandler(item.id)}>-</button>
          <button onClick={()=>CartItemAddHandler(item.id)}>+</button>
        </div> 
    </li>
          ))}
      </ul>
     )
  
   
   const totalAmount = cartcnx.cartAmount.toFixed(2);

    return(
        <Modal>
          <div>
             {cartItems} 
             <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ totalAmount}</span>
            </div> 
            <div  className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button classes={classes.button}>Order</button>
            </div>
          </div>
          </Modal>
    )
}
export default Cart;