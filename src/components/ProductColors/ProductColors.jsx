import React from "react";
import "./ProductColors.scss";

const ProductColors = ({ colors, handleColorClick }) => {
  const color =
    colors &&
    colors.map(color => {
      return (
        <label
          key={color}
          className={`btn btn-default mr-3 ${color.toLowerCase()}`}
          onClick={() => handleColorClick(color)}
        >
          <input
            type="radio"
            name="color"
          />
        </label>
      );
    });
  return (
    <div className="btn-grp btn-group-toggle" data-toggle="buttons">
      {color}
    </div>
  );
};

export default ProductColors;
