import React from 'react'
 import'./Related.css'
import data_products from '../Assests/data_products'
import Item from '../items/Item'
const Related = (props) => {
  return (
    <div className='RelatedProduct'>
     <h1>Related Product</h1>
     <hr/>
      <div className='relatedproduct-item'>
    {data_products.map((item,i)=>{
      return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
  })}

      </div>

    </div>
  )
}

export default Related