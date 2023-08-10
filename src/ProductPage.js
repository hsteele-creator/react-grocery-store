import React from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "./actionCreators";
import Nav from "./Nav";

const ProductPage = () => {
  const { product } = useParams();
  const products = useSelector((state) => state.products);
  const currentProduct = products.filter((item) => item.name === product)[0];
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Nav />
      <div className="current-product-main">
        <div className="current-product-container">
          <div className="current-product-img-container">
            <img className="current-product-img" src={currentProduct.image} />
          </div>

          <div className="current-product-text-container">
            <h1>{currentProduct.name}</h1>
            <p>{currentProduct.description}</p>

            <div className="current-add">
              <input
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              ></input>
              <button
                onClick={() =>
                  dispatch(
                    addToCart(
                      currentProduct.image,
                      currentProduct.name,
                      currentProduct.price,
                      currentProduct.category,
                      quantity
                    )
                  )
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
