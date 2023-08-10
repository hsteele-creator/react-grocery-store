import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./Products.css";
import Nav from "./Nav";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Nav />
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
