import React from "react";
import "./card.css";
  
export const CardSaved = ({children}) => (
    <div className="row main">
     <div className="col s1">
     </div>
    <div className="col s10">
      <div className="card #6d4c41 brown darken-1">
        <div className="card-content white-text">
          <span className="card-title title">Saved Articles</span>
        </div>
      {children}
      </div>
    </div>
    <div className="col s1">
     </div>
  </div>
);