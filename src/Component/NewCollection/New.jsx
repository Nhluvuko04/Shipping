import React from 'react';
import './New.css';
import Item from '../items/Item'; 
import Collections from '../Assests/Collections';

const New = () => {
  return (
    <div className='newcollections'>
      <h1>New Collection</h1>
      <hr/>
      <div className='collection'>
          {Collections.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          })}
      </div>
    </div>
  );
};

export default New;
