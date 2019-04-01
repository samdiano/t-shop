import React from "react";
import "./ProductCard.scss";
import { Link } from 'react-router-dom';


const ProductCard = props => {
  const image = `https://backendapi.turing.com/images/products/${
    props.thumbnail
  }`;
  return (
    <div class="col-sm-4 mt-4 text-center">
      <div class="card">
        <div class="card-body product-card">
          <img className="card-img-top" src={image} alt="Card cap" />
          <p class="card-text mt-2 font-weight-bold">{props.name}</p>
          <p class="card-text mt-2 font-weight-bold price">
            &#163;{props.price}
          </p>
          <Link to={`/products/${props.id}`}><button className="purchase-btn" >Buy now</button></Link>
          {console.log(props.id,'dkdkdk')}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
