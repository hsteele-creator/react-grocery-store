import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import cart from "./cart.png"

const Nav = () => {
    return (
        <>
        <div id="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart"><img className="cart-img" src={cart} /></NavLink>
        </div>
        </>
    )
}

export default Nav