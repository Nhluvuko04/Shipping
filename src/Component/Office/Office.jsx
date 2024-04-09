import React from 'react'
import'./Office.css'
import  bagfive from '../Assests/bagfive.jpg'
import { FaArrowRight } from "react-icons/fa";

const Office = () => {
  return (
    <div className='office'>
     <div className='office-left'>
        <h1>Exclusive</h1>
        <p>Offers for you</p>
        <p>Only on best sellers products</p>
       <button>Check Now  <FaArrowRight /></button>
     </div>
     <div className='office-right'>
       <img src={bagfive} alt=""/>
           
      
     </div>
    

    </div>
  )
}

export default Office