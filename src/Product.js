import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";

const Product = ({ image, name, price }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <>
      <div className="product-card">
        <img className="product-image" src={image} />
        <h1>{name}</h1>
        <p> Now <span>Just</span> ${price}</p>
        <button className="product-btn">Buy Now</button>
      </div>
    </>
  );
};

export default Product;
