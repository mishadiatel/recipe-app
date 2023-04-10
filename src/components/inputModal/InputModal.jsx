import React from "react";
import "./InputModal.css";
import ReactDOM from "react-dom";

const InputModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <div className="modal-content">{props.children}</div>
    </React.Fragment>
  );
};

export default InputModal;
