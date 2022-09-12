import React, { useEffect, Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";

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
        <div className="full_product_details">
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>#id: {product._id}</p>
          </div>
          <div className="detailsBlock-4">
            <h4 style={{ letterSpacing: "1px" }}>{product.description}</h4>
          </div>
          <div className="detailsBlock-2">
            <span className="ProductDetails_raings">
              {product.ratings} ★ | {product.numOfReviews} Ratings
            </span>
          </div>
          <div className="detailsBlock-3">
            <h2>{`₹ ${product.price}`}</h2>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
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

          <button className="submitReview">Submit Review</button>
        </div>
      </div>
      <div className="submitReviews">
        {product.reviews && product.reviews[0] ? (
          <div className="reviews">
            {product.reviews &&
              product.reviews.map((review) => <ReviewCard review={review} />)}
          </div>
        ) : (
          <p className="noReviews">No Reviews Yet</p>
        )}
      </div>
    </Fragment>
  );
};

export default ProductDetails;
