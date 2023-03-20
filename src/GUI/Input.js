import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.heading}</label>{" "}
      <input {...props.input} />
    </div>
  );
}

export default Input;
