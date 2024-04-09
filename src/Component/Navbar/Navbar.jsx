import React, { useState } from 'react';
import './Navbar.css';
import baglogo from '../Assests/baglogo.jpg';
import { MdOutlineShoppingCart } from "react-icons/md";

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={baglogo} alt=""/>
        <p>Edith Essentials </p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("Shop") }}>
          <Link  style={{textDecoration:'none'}}to='/'>Shop</Link>{menu === "Shop" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("Bags") }}>
          <Link style={{textDecoration:'none'}} to='/bags'>Bags</Link>{menu === "Bags" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("Lotions") }}>
          <Link style={{textDecoration:'none'}}to='/lotions'>Lotions</Link>{menu === "Lotions" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("Books") }}>
          <Link style={{textDecoration:'none'}}to='/books'>Books</Link>{menu === "Books" ? <hr/> : <></>}
        </li>
      </ul>

      <div className='nav-logo-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to='/cart'><MdOutlineShoppingCart /></Link>
        <div className='nav-cart-counts'>0</div>
      </div>
    </div>
  );
};

export default Navbar;