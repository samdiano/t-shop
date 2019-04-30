import React from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ title, content }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content ">
          <div className="modal-header px-5">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body px-4">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn close-btn"
              data-dismiss="modal"
            >
              Close
            </button>
            <Link to="/checkout">
              <button type="button" className="btn checkout-btn">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
