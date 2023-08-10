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
      <div id="nav-container">
        <NavLink to="/">Home</NavLink>

        <div id="middle-nav">
          <NavLink to="/products">
            {" "}
            <p>All</p>
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
          <div id="cart-nav">
            <p className="cart-total">{productsTotal}</p>
            <img id="cart" src={cart} />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
