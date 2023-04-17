import React from "react";
import Input from "./Input";
import classes from './InputForm.module.css';

const InputForm = (props) =>{
    return(
         <form className={classes.form}>
         <Input
           input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue: '1'
           }}
         />
         <button>+Add</button>
         </form>
    )
}
export default InputForm;