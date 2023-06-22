import React from "react";
import vegetablebg from "./vegetablebg.jpg";
import choppingBoard from "./choppingboard.jpg"
import "./Main.css"

const Main = () => {
  return (
    <>
      <div
        id="main"
        style={{
          backgroundImage: `url(${choppingBoard})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition : "center"
        }}
      >
        <h1>Fresh and <span>Organic</span>Products</h1>
        <p>Fresh Food straight from our farm right to your table</p>
        <button id="main-button">Shop Now</button>
      </div>
    </>
  );
};

export default Main;

console.log(vegetablebg)