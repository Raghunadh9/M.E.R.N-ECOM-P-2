import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <img
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        alt="User"
        width="75px"
        height="75px"
      />
      <h4>{review.name}</h4>
      <div className="detailsBlock-2">
        <span className="user_review">{review.rating} ★ Ratings</span>
      </div>
      <div className="user_review_comment">{review.comment}</div>
    </div>
  );
};

export default ReviewCard;
