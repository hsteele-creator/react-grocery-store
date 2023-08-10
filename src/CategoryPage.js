import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./CategoryPage.css";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  const products = useSelector((state) => state.products);
  const categoryProducts = products.filter(
    (product) => product.category == category
  );
  return (
    <>
      <Nav />


      <h1 className="category-title">
        {category.slice(0, 1).toUpperCase() +
          category.slice(1, category.length)}
      </h1>
      <div className="category-page-container">
        {categoryProducts.map((product) => {
          return (
            <div className="category-product">
              <Product
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
