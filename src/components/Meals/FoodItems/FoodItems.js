import React from "react";

import classes from './FoodItems.module.css'
import InputForm from "./InputForm";


const FoodItems = (props) =>{
 
    console.log(props.id);

    const price = `$${props.price.toFixed(2)}`
    
    return(
        <li className={classes.food}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <InputForm id={props.id} item={props}   />
        </div>
        </li>
    )
}
export default FoodItems;
