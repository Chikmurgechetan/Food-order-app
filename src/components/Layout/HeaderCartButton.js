import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props =>{
    
    const cartCtx = useContext(CartContext);

    console.log(cartCtx, "-------header cart");

    let quantity = 0;
    
    cartCtx.items.forEach((item) => {
      console.log(item, "----item");
        quantity = quantity + Number(item.quantity);
    });
    console.log(quantity, "----quantity");
  
   
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span> Your Cart</span>
        <span>{cartCtx.message}</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    );
  };
export default HeaderCartButton;