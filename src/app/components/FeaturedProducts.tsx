import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/product";

const FeaturedProducts = () => {
  const all_products = products;
  const featured_products = all_products.slice(0, 8);
  return (
    <section className="py-5 text-dark" style={{ backgroundColor: "#f8f9fa" }}> {/* Neutral background color */}
      <div className="container">
        <h1 className="display-4 text-center mb-4 text-dark fw-bolder">
          Premium Series
        </h1>
        <p className="text-center mb-4 mx-auto px-4 text-dark">
          Explore our most sought-after games, each one a true masterpiece.
        </p>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {featured_products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
