import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";

function error() {
  return (
    <div className="error-div">
      <img src="error-404.jpg" alt="page not found"></img>
      <h1> Page Not Found</h1>
      <p>
        Oops! Looks Like Something Going wrong We can not seem to find the page
        you are looking for, make sure that you have typed the correct URL
      </p>
      <Link to="/">
        <button className="btn-back">Go To Home</button>
      </Link>
    </div>
  );
}

export default error;
