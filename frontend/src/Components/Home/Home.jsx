import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Home.css";
import cat1 from "../../images/catone.jpg";
import cat2 from "../../images/cat2.jpg";
import cat3 from "../../images/cat3.jpg";
import cat4 from "../../images/cat4.jpg";
import cat5 from "../../images/cat5.jpg";
import cat6 from "../../images/cat6.jpg";
import "react-toastify/dist/ReactToastify.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title="FNPASSION." />
          <Slider />
          <h2 className="homeHeading">Category</h2>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat1} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat2} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat3} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat4} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat5} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card h-90">
                  <a href="#">
                    <img class="card-img-top" src={cat6} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

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
