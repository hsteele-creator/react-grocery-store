import React from "react";
import "./CartProduct.css";

const CartProduct = ({ name, price, image, quantity }) => {
    console.log(price)
  return (
    <div className="cart-product-container">
        <img src={image} />
        <h1 className="cart-title">{name}</h1>

      <div className="cart-quantity-container">
        <button className="qty-btn">+</button>
        <p>{quantity}</p>
        <button className="qty-btn">-</button>
      </div>

      <div className="price-and-remove">
      <h2 className="cart-price">${price}</h2>
      <button className="remove-btn">Remove</button>
      </div>


    </div>
  );
};

export default CartProduct;
