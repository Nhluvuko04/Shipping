import React from 'react';
import './Popular.css';
import data_products from '../Assests/data_products'; 
import Item from '../items/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Advanced Books</h1>
      <div className='popular-items'>
        {/* Use item variable instead of items */}
        {data_products.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
