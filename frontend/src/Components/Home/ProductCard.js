import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Product.css";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "green",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 25 : 20,
  };
  return (
    <Link className="Product_Card_Home" to={`/product/${product._id}`}>
      <img
        src={product.images[0].url}
        alt={product.name}
        height="270px"
        width="1000px"
      />
      <p>{product.name}</p>
      <div className="">
        <ReactStars {...options} />
        <br />
        <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span style={{ color: "green" }}>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
