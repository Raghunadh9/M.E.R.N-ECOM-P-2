//iam at 6:09:51

import React, { useEffect, Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReactStars from "react-rating-stars-component";

import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 25 : 20,
  };
  return (
    <Fragment>
      <div className="ProductDetails">
        <div className="ProductDetails_img_container">
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                  width="400px"
                />
              ))}
          </Carousel>
        </div>
        <div className="">
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>#id: {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span>({product.numOfReviews} Reviews.)</span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`₹ ${product.price}`}</h1>
            <div className="detailsBlock-3.1">
              <div className="detailsBlock-3.1.1">
                <button>-</button>
                <input type="number" value={1} />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.Stock < 1 ? "red" : "green"}>
                {product.Stock < 1 ? "Out of Stock" : "In Stock"}
              </b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description: <p>{product.description}</p>
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
