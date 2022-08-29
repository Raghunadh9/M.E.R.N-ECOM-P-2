import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Blue t-Shirt",
  price: "₹3000",
  _id: "abhishek",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
};

const Home = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

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
