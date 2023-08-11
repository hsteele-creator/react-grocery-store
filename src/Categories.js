import React from "react";
import "./Categories.css";
import Category from "./Category";
import fruit from "./fruit.jpg";
import meat from "./meat.jpg";
import drinks from "./drinks.jpg";

const Categories = () => {
  return (
    <>
      <h1 id="categories-header">Categories</h1>
      <div id="categories-container">
        <Category img={fruit} title={"Fruit"} text={"Check out our collection of fresh produce."} />
        <Category img={meat} title={"Meat"} text={"Check out our collection of fresh meat, straight from the farm."} />
        <Category img={drinks} title={"Drinks"} text={"Check out our collections of ice cold drinks."} />
      </div>
    </>
  );
};

export default Categories;
