import React from 'react'
import './Breadcrum.css'
import { FaArrowDown } from "react-icons/fa";

const Breadcrum = (props) => {
    const{Product}=props;
  return (
    <div className='Breadcrum'>
        Home<FaArrowDown />Shop<FaArrowDown />{Product.category}<FaArrowDown />{Product.name}

    </div>
  )
}

export default Breadcrum