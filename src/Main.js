import React from "react";
import vegetablebg from "./vegetablebg.jpg";
import choppingBoard from "./choppingboard.jpg";
import "./Main.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Categories from "./Categories";

const Main = () => {
  return (
    <>
      <Nav />
      <div
        id="main"
        style={{
          backgroundImage: `url(${choppingBoard})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1>
          Fresh and <span>Organic </span>Products
        </h1>
        <p>Fresh Food straight from our farm right to your table</p>

        <NavLink to="/products">
          <button id="main-button">Shop Now</button>
        </NavLink>
      </div>
      <Categories />
    </>
  );
};

export default Main;

console.log(vegetablebg);
