import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import cart from "./cart.png";

const Nav = () => {
  return (
    <>

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

        <NavLink to="/">
          <img id="cart" src={cart} />
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
