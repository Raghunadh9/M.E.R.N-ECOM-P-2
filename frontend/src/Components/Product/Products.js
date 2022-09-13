import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import ProductCard from "../Home/ProductCard";
const Products = () => {
  const dispatch = useDispatch();
  const [products, loading, error, productsCount] = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return <Fragment>{loading ? <Loader /> : <Fragment></Fragment>}</Fragment>;
};

export default Products;
