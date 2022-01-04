import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar({ isLoggedIn }) {
  const [toggleNav, setToggleNav] = useState(false);
  let obj = toggleNav
    ? { display: "flex", flexDirection: "column", alignItems: "self-start" }
    : {};

  return (
    <nav className="navMainContainer">
      <div className="logoContainer">
        <Link to="/">
          <h1>
            <i className="logo-font">BOOKINGA</i>
          </h1>
        </Link>
      </div>
      <ul className="burgerMenu">
        <li>
          <i
            className="fas fa-bars"
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </li>
      </ul>
      <div className="pagesLinks" style={obj}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/findFarm">Find Farm </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        {!isLoggedIn ? (
          <ul>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-lg"></i>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
