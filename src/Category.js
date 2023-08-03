import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ img, title, text }) => {
  console.log(img);
  return (
    <>
      <div className="category-container">
        <div>
          <img className="category-img" src={img} />
        </div>

        <div className="category-text-container">
          <h1>{title}</h1>
          <p>{text}</p>
          <Link to={`/products/${title.toLowerCase()}`} >
            <button className="category-btn">View Products</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
