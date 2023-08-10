import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { addToCart } from "./actionCreators";
import { NavLink } from "react-router-dom";

const Product = ({ image, name, price, category }) => {
  const dispatch = useDispatch();
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
          <div className="input-add">
            <input
              id="qty"
              className="qty"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            ></input>
            <button
              className="product-btn"
              onClick={() =>
                dispatch(addToCart(image, name, price, category, quantity))
              }
            >
              Add To Cart
            </button>
          </div>
          <NavLink to={`/product/${name}`}>
            <button className="product-page-btn">Product Page</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Product;
