import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import "./Products.css"

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              image={product.image}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
