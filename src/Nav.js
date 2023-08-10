import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import cart from "./cart.png";
import { useSelector } from "react-redux";

const Nav = () => {
  const productsTotal = useSelector((state) => state.cart).length;
  console.log(productsTotal);
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

        <NavLink to="/cart">
          <div className="nav-cart-container">
            <img id="cart" src={cart} />
            <p className="cart-total">{productsTotal}</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
