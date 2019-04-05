import React from "react";
import "./ProductSizes.scss";

const ProductSizes = ({ sizes, handleSizeClick }) => {
  const size =
    sizes &&
    sizes.map(size => {
      return (
        <label
          key={size}
          className="btn btn-default"
          onClick={() => handleSizeClick(size)}
        >
          <input type="radio" name="size" />
          {size}
        </label>
      );
    });
  return (
    <div className="btn-groups btn-group-toggle" data-toggle="buttons">
      {size}
    </div>
  );
};

export default ProductSizes;
