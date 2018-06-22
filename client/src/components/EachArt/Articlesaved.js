import React from "react";
import "./eachart.css";

export const SavedArticle = props => (


<div className="col s12 savedindi">
    <h4 className="header"> <a className="linktext" href={props.url}>{props.title}</a></h4>
    <div className="card horizontal textcard">
    <p id="summary">{props.summary}</p>
    <button className="btn btn-success button #6d4c41 brown darken-1" onClick={props.onClick}>Delete</button>
  </div>
  </div>

    )