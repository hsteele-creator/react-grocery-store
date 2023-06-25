import React from "react";
import "./Cart.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <Nav />
      {cart.map((product) => {
        return (
          <CartProduct
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
    </>
  );
};

export default Cart;
