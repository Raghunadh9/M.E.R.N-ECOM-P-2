import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
  size: window.innerWidth < 600 ? 25 : 20,
};

const Product = ({ product }) => {
  return (
    <Link to={product._id} className="Product_Card_Home">
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div className="">
        <ReactStars {...options} />
        <br />
        <span>(256 Reviews)</span>
      </div>
      <span>{product.price}</span>
    </Link>
  );
};

export default Product;
