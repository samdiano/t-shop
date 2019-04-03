import React from "react";
import StarRatings from "react-star-ratings";
import moment from 'moment'
import "./ProductReviews.scss";
const ProductReviews = ({ name, review, rating, created_on }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <StarRatings rating={rating} starDimension="20px" starRatedColor="gold" starSpacing="3px" />
          <h4 className="reviewer">{name}</h4>
          <small>{moment(created_on).fromNow()}</small>
        </div>
        <div className="col-md-8">
          <p className="review-content pt-1">
            {review}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default ProductReviews;
