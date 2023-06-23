import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [type, setType] = useState("meat");

  const updateProducts = () => {
    if (type === "") {
      return products;
    } else {
      return products.filter((product) => product.category === type);
    }
  };

  const updatedProducts = updateProducts();

  return (
    <>
    <div id="mini-nav">
        <p onClick={() => setType("")}>All Products</p>
        <p onClick={() => setType("meat")}>Meat</p>
        <p onClick={() => setType("fruit")}>Fruit</p>
        <p onClick={() => setType("drink")}>Drinks</p>
    </div>
      <div className="products-container">
        {updatedProducts.map((product) => {
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
