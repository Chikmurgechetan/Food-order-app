import React from "react";

import classes from './FoodItems.module.css'


const FoodItems = (props) =>{
    const price = `$${props.price.toFixed(2)}`
    return(
        <li className={classes.food}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div></div>
        </li>
    )
}
export default FoodItems;
