import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props =>{
    
    const cartCtx = useContext(CartContext);

    // console.log(cartCtx, "-------header cart");

    // console.log(quantity, "----quantity");
  
   
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}>{cartCtx.cartQuantity}</span>
      </button>
    );
  };
export default HeaderCartButton;