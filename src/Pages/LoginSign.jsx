import React from 'react'
import './CSS/Login.css'
const LoginSign = () => {
  return (
    <div className='LoginSign'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='field'>
    <input type="text"  placeholder='Your Name'/>
    <input type="email"  placeholder='Your Email'/>
    <input type="password"  placeholder='Your Password'/>
  </div>

  <button>Continue</button>
    <p className='login'> Already  have an account? <span>Login here</span></p>
    <div className='agree'> 
       <p>Loging in</p>
    </div>
      </div>

    </div>
  )
}

export default LoginSign

