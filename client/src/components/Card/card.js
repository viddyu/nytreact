import React from "react";
import "./card.css";
  
export const Card = ({children}) => (
    <div className="row main news">
     <div className="col s2 ">
     </div>
    <div className="col s8 inputarea">
      <div className="card inputarea">
        <div className="card-content black-text">
          <span id="cardtitle" className="card-title title">Search for some Articles</span>
        </div>
      {children}
      </div>
    </div>
    <div className="col s2">
     </div>
  </div>
);