import React from "react";
import "./AddReview.scss";
import StarRatings from "react-star-ratings";

const AddReview = ({
  rating,
  review,
  productId,
  addReview,
  handleReviewChange,
  handleRatingChange
}) => {
  return (
    <div className="pb-5 pl-5 ml-5">
      <h1 className="add-review-heading">Add a review</h1>
      <div className="row">
        <div className="col-md-4 field-title">Your review</div>
        <div className="col-md-8">
          <textarea
            onChange={handleReviewChange}
            className="input-big"
            name="review"
            id=""
            value={review}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 field-title">Overall rating</div>
        <div className="col-md-8">
          <StarRatings
            rating={rating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={handleRatingChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="offset-md-4 col-md-8 pt-3">
          <button className="add-review-btn" onClick={() => addReview({rating, review, productId})}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
