import React, { Component } from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children ;
  }

  // componentDidUpdate() {
  //   console.log('[Modal.js] componentDidUpdate');
  // }
  
  render() {
    console.log('RENDERING MODAL', this.props);
    const { show, modalClosed, children } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0"
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
