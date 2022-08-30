import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      return console.log("err:" + error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title="FNPASSION." />
          <Slider />

          <h2 className="homeHeading">Featured Products.</h2>
          <div className="container_home" id="container_home">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
