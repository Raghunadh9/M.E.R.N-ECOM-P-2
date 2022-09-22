import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="cartItemCard">
      <img src={item.image} alt="ssa" width="90px" height="120px" />
      <div className="">
        <Link to={`/product/${item.product}}`}>{item.name}</Link>
        <br />
        <span>{`Price: ₹${item.price}`}</span>
        <br />
        <p
          onClick={() => deleteCartItems(item.product)}
          className="remove_cart_product"
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
