import React from "react";
import "./CartProduct.css";
import { useDispatch } from "react-redux";
import { removeItem } from "./actionCreators";
import { raiseQuantity, lowerQuantity } from "./actionCreators";

const CartProduct = ({ name, price, image, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product-container">
      <img src={image} />
      <h1 className="cart-title">{name}</h1>

      <div className="cart-quantity-container">
        <button
          className="qty-btn"
          onClick={() => dispatch(lowerQuantity(name))}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="qty-btn"
          onClick={() => dispatch(raiseQuantity(name))}
        >
          +
        </button>
      </div>

      <div className="price-and-remove">
        <h2 className="cart-price">${Math.round(price * quantity * 100) / 100}</h2>
        <p className="remove-btn" onClick={() => dispatch(removeItem(name))}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
