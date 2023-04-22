import React, { useContext } from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) =>{
    
  const cartcnx = useContext(CartContext);
  
 

     const cartItems=(
      <ul className={classes["cart-items"]}>
        {
          cartcnx.items.map((item)=>(
            <li className={classes['cart-item']}>
               <div >
       
       <h2>{item.name}</h2>
       <div className={classes.summary}>
         <span className={classes.price}>{item.price}</span>
         <span className={classes.quantity}>x {item.quantity}</span>
       </div>
     </div>
            </li>
          ))
        }
      </ul>
     )
   
   
     const prices = cartcnx.items.map((item) => item.price);    // took prices in array
         let total = 0;
     for (var i = 0; i < prices.length; i++) {          // added prices for total
       total += prices[i];
     }
   
     const totalAmount = total.toFixed(2);

    return(
        <Modal>
          <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
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