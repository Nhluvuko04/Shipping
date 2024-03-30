import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../../Context/ShopContext'
import { CiCircleRemove } from "react-icons/ci";
import All_Product from '../Assests/All_Product';


const CartItems = () => {
  return (
    <div className=' CartItems'>
        <div className='cartitems-fomart-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr/>
           {All_Product.map((e)=>{
             return<div>

             <div className='cartitem-format cartitems-fomart-main'>
             <img src={e.image} alt='' className='carticon-product-icon'/>
                  <p>{e.name}</p>
                  <p>R{e.new_price}</p>
              <button className='cart-quantity'>{CartItems[e.id]}</button>
              <p>R{e.new_price*CartItems[e.id]}</p>
             <CiCircleRemove onclick={()=>{}} />
            </div>
            <hr/>
           </div>
           return null;
           })}
          <div className='cart-down'>
           <div className='cartitem-total'>
            <h1>Cart Total</h1>
           </div>
            <div className='cartitems-total-item'>
               <p>Subtotal</p>
                <p>R{0}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
                <p>Shopping</p>
                <p>free</p>
                </div>          
             <hr/>
                <div className='cartitems-total-item'>
                  <h3>Total</h3>
                   <h3>R{0}</h3>
                </div>
          </div>
          <div className='cart-down'>
          <button>Check Out</button>
          </div>
    </div>


  )
}

export default CartItems