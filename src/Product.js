import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";

const Product = ({ image, name, price, category }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [quantity, setQuantity] = useState(1);


  const addToCart = (image, name, price, category, quantity) => {
    return {
      type: "ADD_TO_CART",
      payload: { image, name, price, category, quantity },
    };
  };

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
      </div>
    </>
  );
};

export default Product;
