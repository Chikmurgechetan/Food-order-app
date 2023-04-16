
import React from "react";
 
import classes from './AvalabelFood.module.css'
import Card from "../UI/Card";
import FoodItems from "./FoodItems/FoodItems";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
 
 

 const AvalabelFood = () => {
        return(
         <section className={classes.meals}>
           <Card>
            <ul>
                {
                   DUMMY_MEALS.map((food)=>{
                    return(    
                        <FoodItems key={food.id}
                         name={food.name}
                         description={food.description}
                         price={food.price}
                        />

                    )

                    })
                }
            </ul>
            </Card>
         </section>

          
        )
     };

export default AvalabelFood;