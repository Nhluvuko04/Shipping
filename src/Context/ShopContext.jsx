import React, { createContext, useState } from "react";
import All_Product from "../Component/Assests/All_Product";

export const ShopContext = createContext(null);
const getdefaultChart=()=>{
 let cart={};
for(let index=0;index<All_Product.length+1;index++){
cart[index]=0;
}

return cart;

}
const ShopContextProvider = (props) => {
 
   const [cartItems, setCartItem]=useState(getdefaultChart());
   

 const addToCart=(itemId)=>{
  setCartItem((prev)=>({...prev,[itemId]:prev [itemId]+1}))
  console.log(cartItems);
 }

 const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev [itemId]-1}))
   }

   const contextValue={All_Product,cartItems,addToCart,removeFromCart}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

