import React, { useContext } from 'react'
import './Display.css'
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const{addTOChart}=useContext(ShopContext)
    const { Product}=props;
  return (
              <div className='ProductDisplay'>
                <div  className='ProductDisplay-left'>
                 <div className='Product-img-list'>
                 <img src={Product.image} alt=''/>
                 <img src={Product.image} alt=''/>
                   <img src={Product.image} alt=''/>
            <img src={Product.image} alt=''/>
           </div>
            <div className='ProductDisplay-image'>
             <img className='ProductDisplay-main-img'src ={Product.image}alt=''/>
            </div>
          </div>
         <div className='ProductDisplay-right'>
        <h1>{Product.name}</h1>
       <div className='productdisplay-right-star'>
       <TiStarFullOutline />
       <TiStarFullOutline />
       <TiStarFullOutline />
       <TiStarFullOutline />
       <FaStarHalf />
      </div>
    {/* <div className='productdisplay-right-price'>
  <div className='product-right-old'>R{product.old_price}</div>
  <div className='product-right-new'>R{product.new_price}</div>
</div> */}

     <div className='product-right-description'>
       Its lovely
     
    <div className='product-right-size'>
             <div>Green</div>
           <div>Blue</div>
            <div>Purpule</div>
           <div>White</div>
            <div>Green</div>
            </div>
            </div>
       <button>ADD TO CHAT</button>
         <p className='productdisplay-right-category'> <span>Category:</span> bag</p>
         <p className='productdisplay-right-category'> <span>:</span>Modern, Latest</p>

       </div> 
       </div>

  )
}

export default ProductDisplay