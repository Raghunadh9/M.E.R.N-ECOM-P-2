import React from "react";
import userImg from "../../images/userimg.png";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <img src={userImg} alt="User" width="75px" height="75px" />
      <h4>{review.name}</h4>
      <div className="detailsBlock-2">
        <span className="user_review">{review.rating} ★ Ratings</span>
      </div>
      <div className="user_review_comment">{review.comment}</div>
    </div>
  );
};

export default ReviewCard;
