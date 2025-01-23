"use client"

import React from 'react'
import { useCart } from '../contexts/CartContext';
import { products } from '@/data/product';
import Image from 'next/image';

interface DetailPageProps {
  params: { id: string };
}

const ClientProductDetails = ({ params }: DetailPageProps) => {
  console.log(params);
  
  const { addToCart } = useCart();

  const productId = parseInt(params.id, 10);
  const product = products.find((prod) => prod.id === productId);
  

  if (!product) {
    return (
      <div className="text-white text-center py-5">
        <h2 className="py-5">Product not found!</h2>
      </div>
    );
  } 

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center p-5 bg-light">
      <div className="container bg-white shadow-lg p-4 rounded-lg">
        <div className="row align-items-center">
          {/* Product Image Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <Image
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "500px", objectFit: "contain" }}
              width={500}
              height={500}
            />
          </div>

          {/* Product Info Section */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <h1 className="mb-4 text-primary">{product.name}</h1>
              <p className="text-muted mb-4">{product.description}</p>
              <h4 className="text-success mb-4">${product.price.toFixed(2)}</h4>
            </div>
            <div className="mt-3">
              <button
                className="btn btn-primary btn-lg w-100 shadow-sm"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProductDetails;
