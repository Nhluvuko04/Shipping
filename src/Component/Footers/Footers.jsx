import React from 'react'
import './Footers.css'
import bagone from '../Assests/Bagone.jpg';
import { IoLogoFacebook } from 'react-icons/io';
import { FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; // Assuming you want to use an email iconi

const Footers = () => {
    return(
        <div className='footer'>
        <div className='footer-logo'>
          <img src={bagone} alt='' />
          <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
          <div className='footer-icons-container'>
            <IoLogoFacebook />
          </div>
          <div className='footer-icons-container'>
            <FaTwitterSquare />
          </div>
          <div className='footer-icons-container'>
            <FaInstagram />
          </div>
          <div className='footer-icons-container'>
            <AiOutlineMail /> {/* Using AiOutlineMail for an email icon */}
          </div>
        </div>
        <div className='footer-copyright'>
          <hr />
          <p>copyright@ 2024</p>
        </div>
      </div>
    );
}

export default Footers
