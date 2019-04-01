import React from "react";
import "./ProductSizes.scss";

const ProductSizes = ({ sizes }) => {
  const size = sizes && sizes.map(size => {
    return <label class="btn btn-default">
        <input type="radio" name="options" id="option2" />
        {size}
      </label>
  });
  return (
    <div class="btn-groups btn-group-toggle" data-toggle="buttons">
      {size}
    </div>
  );
};

export default ProductSizes;
