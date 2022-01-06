import React, { useState, useEffect, createContext } from "react";
import "../styles/findFarm.css";
import { Link } from "react-router-dom";
import FarmCardInfo from "../components/FarmCardInfo";
export const BookingContext = createContext();

function FindFarm() {
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [date, setDate] = useState("empty");

  return (
    <div>
      <div className="heroImageContainer1">
        <div className="actionArea">
          <h2>Explore the most beautiful farms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis sed.
          </p>
          <Link to="/findFarm">
            <button> GET STARTED</button>
          </Link>
        </div>
      </div>
      <BookingContext.Provider value={{ date, setDate }}>
        <FarmCardInfo />
      </BookingContext.Provider>
    </div>
  );
}

export default FindFarm;
