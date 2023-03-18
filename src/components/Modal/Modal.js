import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>
          Today's Date :{" "}
          {new Date().toLocaleString("en-US", {
            dateStyle: "full",
          })}
        </h1>
        <button className="Button" onClick={props.closed}>
          Close
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
