import React, { useEffect, Fragment, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useAlert } from "react-alert";
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    try {
      dispatch(addItemsToCart(match.params.id, quantity));
      alert.success("Item Added To Cart");
    } catch (error) {
      alert.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name}`} />

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
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "red" : "green"}>
                    {product.Stock < 1 ? "Out of Stock" : "In Stock"}
                    <br />
                    {product.Stock < 1 ? null : (
                      <b>Only {product.Stock} left.Hurryup!</b>
                    )}
                  </b>
                </p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">Reviews</h3>
          <div className="submitReviews">
            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewCard review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
