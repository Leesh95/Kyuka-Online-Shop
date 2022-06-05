import { useParams } from 'react-router-dom';
import React from 'react';

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};
export default ProductScreen;
