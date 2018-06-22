import React from "react";
import "./form.css";

export const FormBtn = props => (
  <button {...props}  className="btn btn-success button #6d4c41 brown darken-1">
  Search
    {props.children}
  </button>
);