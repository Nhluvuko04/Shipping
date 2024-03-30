import React from 'react'
import './Letter.css'

const Letter = () => {
  return (
    <div className='newsletter'>
     <h1>Get In Touch with Us!</h1>
     <p>Subscribe to our news letter and stay updated to sales and new products</p>
       <div>
       <input type="text" placeholder="Enter your Email" />
          <button>Subscribe</button>
       </div>
    </div>
  )
}

export default Letter