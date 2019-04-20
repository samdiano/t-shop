import React from "react";
import "./ModalSmall.scss";

const Modal = ({ title, content, id }) => {
  return (
    <div
      className="modal  fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm " role="document">
        <div className="modal-content small ">
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
