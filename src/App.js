import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShoppingCategory from './Pages/ShoppingCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import banner_bag from './Component/Assests/banner_bag.jpg'
import banner_lotion from './Component/Assests/banner_lotion.jpg'
import banner_book from'./Component/Assests/banner_book.jpg'
import Footers from './Component/Footers/Footers';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/bags" element={<ShoppingCategory banner={banner_bag}category="bag" />} />
          <Route path="/lotions" element={<ShoppingCategory banner={banner_lotion} category="lotion" />} />
          <Route path="/books" element={<ShoppingCategory  banner={banner_book}category="book" />} />
          
          <Route path='/product'element={<Product/>}>
            <Route path=':ProductId' element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSign />} />
        </Routes>
       <Footers/>
      </BrowserRouter>
    </div>
  );
}

export default App;