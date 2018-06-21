import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


export const Nav = props => (
<nav>
    <div className="nav-wrapper #6d4c41 brown darken-1">

      <Link className="brand-logo center logo" to="/">New York Times Article Scrubber!</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/savedarticles">Saved Articles</Link></li>
         
      </ul>
    </div>
  </nav>
)