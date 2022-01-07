import React from "react";

import "./Button.css";

/* 
  Custom button element. 
*/
const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
