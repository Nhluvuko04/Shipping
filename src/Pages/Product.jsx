import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay.jsx/ProductDisplay';
import Related from '../Component/RelatedProduct/Related';

const Product = () => {
  const { All_Product } = useContext(ShopContext);
  const { ProductId } = useParams();

  const selectedProduct = All_Product.find((product) => product.id === Number(ProductId));

  return (
    <div>
      <Breadcrum product={selectedProduct} />
      <ProductDisplay product={selectedProduct} />
      <Related />
    </div>
  );
};

export default Product;