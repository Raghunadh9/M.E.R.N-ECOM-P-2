import React, { useEffect, Fragment, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import ReviewCard from "./ReviewCard.js";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstant";
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
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
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);
    dispatch(newReview(myForm));
    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

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
                      width="800px"
                    />
                  ))}
              </Carousel>
            </div>
            <div className="full_product_details">
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>#id: {product._id}</p>
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
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  <b> Status: </b>
                  <b className={product.Stock < 1 ? "red" : "green"}>
                    {product.Stock < 1 ? "Out of Stock" : "In Stock"}
                    <br />
                    {product.Stock < 1 ? null : (
                      <b>Only {product.Stock} left.Hurryup!</b>
                    )}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                <b> Description : </b>
                <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>
          <h3 className="reviewsHeading">Reviews</h3>
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <h6>
                <b> Ratings :</b>
              </h6>
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />{" "}
              <br />
              <h6>
                <b> Comment :</b>
              </h6>
              <textarea
                name=""
                className="submitDialogTextArea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                cols="30"
                rows="5"
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
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
