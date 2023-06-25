import React from "react";
import "./Cart.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import Product from "./Product";


const Cart = () =>{
    const cart = useSelector(state => state.cart);
    console.log(cart)
    return (
        <>
        <Nav />
        {cart.map(product => {
            return <Product image={product.image} />
        })}
        </>
    )
}

export default Cart