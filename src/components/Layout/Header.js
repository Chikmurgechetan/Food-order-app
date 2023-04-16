import React from "react";

import mealsImages from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    return(
        <>
        <header className={classes.header}>
        <h1>HOMW MEALS</h1>
       <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImages} alt=" A table food of delicious food!"   />
        </div>
        </>
    )
}
export default Header;