import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HomePageGrid from "../components/HomePageGrid";
import Testimonial from "../components/Testimonial";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-div">
      <div className="heroImageContainer">
        <div className="actionArea">
          <h2>Explore the most beautiful farms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis sed.
          </p>
          <Link to="/login">
            <button> GET STARTED</button>
          </Link>
        </div>
      </div>
      <div className="Pros-points">
        <h2>
          WHY <span style={{ color: " #ff385c" }}>CHOOSE US</span>
        </h2>
        <p>We provide full service at every step.</p>
        <div className="Pros-boxes">
          <div className="Pros-single-box">
            <img
              className="Pros-image"
              src="https://code-theme.com/html/findhouses/images/icons/icon-4.svg"
              alt="Pros"
            ></img>
            <h3>Wide Range Of Properties</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </p>
          </div>
          <div className="Pros-single-box">
            <img
              className="Pros-image"
              src="https://code-theme.com/html/findhouses/images/icons/icon-4.svg"
              alt="Pros"
            ></img>
            <h3>Wide Range Of Properties</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </p>
          </div>
          <div className="Pros-single-box">
            <img
              className="Pros-image"
              src="https://code-theme.com/html/findhouses/images/icons/icon-4.svg"
              alt="Pros"
            ></img>
            <h3>Wide Range Of Properties</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </p>
          </div>
        </div>
      </div>
      <HomePageGrid />
      <Testimonial />
    </div>
  );
}

export default Home;
