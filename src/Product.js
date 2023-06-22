import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css"

const Product = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    console.log(store)
    return (
        <>
        <div className="product-card">
            
        </div>

        </>
    )
}

export default Product