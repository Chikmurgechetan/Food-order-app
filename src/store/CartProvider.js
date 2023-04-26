
import React, { useReducer }  from "react";
import CartContext from "./cart-context"

const reducerFun = (state,action)=>{
     if(action.type === 'ADD_Items'){

  const itemIndex = state.allItems.findIndex((item)=>{
        return item.id === action.item.id
    })
       state.totalQuanity+=action.item.amount;

       if(itemIndex === -1 ){
        state.allItems.push(action.item)
        state.totalAmount += action.item.price*action.item.amount
       }
      else{
        state.allItems[itemIndex].amount+=action.item.amount
        state.totalAmount+=state.allItems[itemIndex].price*action.item.amount
      }

    return {
        allItems:state.allItems,
        totalAmount:state.totalAmount,
        totalQuanity:state.totalQuanity
        }
   }

     if(action.type === 'update'){
        const itemIndex = state.allItems.findIndex((item)=>{
        return item.id === action.id
      })
      
      state.allItems[itemIndex].amount+=1;
      state.totalAmount+=state.allItems[itemIndex].price;
      state.totalQuanity+=1;
       
      return {
        allItems:state.allItems,
        totalAmount:state.totalAmount,
        totalQuanity:state.totalQuanity
      }
   }
   return {
      allItems:[],
      totalAmount:0,
      totalQuanity:0
     }
 
}

const CartProvider = (props) =>{

const [items,dispatchItems] = useReducer(reducerFun,{

  allItems:[],
  totalAmount:0,
  totalQuanity:0,
})


   const addItemToCartHandler = (item) =>{
      dispatchItems({type:'ADD_Items', item:item})
    }; 


    const updateItemHandler = (id) =>{
       dispatchItems({type:'update', id:id})
    // console.log(id)
    }

   const removeItemFromCartHandler = (id) =>{
       
   };
     
   
   const cartContext = {
          cartItems:items.allItems,
          cartAmount:items.totalAmount,
          cartQuantity:items.totalQuanity,
          addItem: addItemToCartHandler ,
          removeItem: removeItemFromCartHandler,
          updateItem: updateItemHandler

         };

    return (
    <CartContext.Provider value={cartContext}>
         {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider;