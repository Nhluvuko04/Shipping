import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='LoginSign'>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='field'>
    <input type="email"  placeholder='Your Email'/>
    <input type="password"  placeholder='Your Password'/>
  </div>

  <button>Continue</button>
 
<p className='login'> Already have an account? <Link className="signup-link" to="/login">SignUp</Link></p>

    <div className='agree'> 
      
    </div>
      </div>

    </div>
  )
}

export default Login