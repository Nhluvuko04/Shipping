import React from 'react'
import'./Office.css'
import  bagfive from '../Assests/bagfive.jpg'
const Office = () => {
  return (
    <div className='office'>
     <div className='office-left'>
        <h1>Exclusive</h1>
        <p>Offers for you</p>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
     </div>
     <div className='office-right'>
       <img src={bagfive} alt=""/>
     </div>

    </div>
  )
}

export default Office