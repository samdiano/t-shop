import React from "react";
import "./ProductColors.scss";

const ProductColors = ({ colors }) => {
  const color = colors && colors.map(color => {
    return <label className={`btn btn-default mr-3 ${color.toLowerCase()}`}>
      <input
        type="radio"
        name="color"
      />
    </label>
  });
  return (
    <div class="btn-grp btn-group-toggle" data-toggle="buttons">
      {color}
    </div>
  );
};

export default ProductColors;
