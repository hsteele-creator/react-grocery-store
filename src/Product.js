import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";

const Product = ({ image, name, price }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="product-card">
        <img className="product-image" src={image} />
        <h1>{name}</h1>
        <p>
          {" "}
          Now <span>Just</span> ${price}
        </p>

        <div id="purchase-container">
          <input
            id="qty"
            className="qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <button className="product-btn">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
