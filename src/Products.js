import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./Products.css";
import { NavLink } from "react-router-dom";
import cart from "./cart.png";
import Nav from "./Nav"

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
    {/* <Nav /> */}
      <div id="mini-nav">

        <NavLink to="/">Home</NavLink>

        <div id="categories-container">
          <NavLink to="/products">
            {" "}
            <p>All Products</p>
          </NavLink>
          <NavLink to="/products/meat">
            <p>Meat</p>
          </NavLink>
          <NavLink to="/products/fruit">
            <p>Fruit</p>
          </NavLink>
          <NavLink to="/products/drinks">
            <p>Drinks</p>
          </NavLink>
        </div>

        <NavLink to="/"><img id="cart" src={cart} /></NavLink>
      </div>
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
