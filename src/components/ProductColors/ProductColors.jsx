import React from "react";
import "./ProductColors.scss";

const ProductColors = ({ colors }) => {
  const color = colors && colors.map(color => {
    return <label className={`btn btn-secondary mr-3 ${color.toLowerCase()}`}>
      <input
        type="radio"
        name="options"
        id="option1"
        autocomplete="off"
        checked
      />
    </label>
  });
  return (
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      {color}
    </div>
  );
};

export default ProductColors;
