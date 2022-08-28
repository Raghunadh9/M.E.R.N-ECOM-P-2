import React from "react";
import Slider from "../Slider/Slider";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";

const Home = () => {
  const product = {
    name: "Blue t-Shirt",
    price: "₹3000",
    _id: "abhishek",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  };
  return (
    <div>
      <MetaData title="FNPASSION." />
      <Slider />
      <h2 className="homeHeading">Featured Products.</h2>
      <div className="container_home" id="container_home">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </div>
  );
};

export default Home;
