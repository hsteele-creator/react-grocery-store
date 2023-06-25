import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import "./Products.css";
import { NavLink } from "react-router-dom";
import cart from "./cart.png";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.cart.length)

  const [type, setType] = useState("");

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
        <NavLink to="/">Home</NavLink>

        <div id="categories-container">
          <p onClick={() => setType("")}>All Products</p>
          <p onClick={() => setType("meat")}>Meat</p>
          <p onClick={() => setType("fruit")}>Fruit</p>
          <p onClick={() => setType("drink")}>Drinks</p>
        </div>

        <NavLink to="/cart"><img id="cart" src={cart} /></NavLink>
      </div>
      <div className="products-container">
        {updatedProducts.map((product) => {
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
