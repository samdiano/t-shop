import React from "react";

const Banner = props => {
  return (
    <div>
      <img
        className="banner-img"
        src={props.image}
        alt="banner"
        height="336"
        width="960"
      />
    </div>
  );
};

export default Banner;
