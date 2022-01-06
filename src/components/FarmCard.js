import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "../pages/FindFarm";
import "../styles/findFarm.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
function FarmCard(props) {
  const history = useHistory();
  const { logged } = useContext(UserContext);
  const { date, setDate } = useContext(BookingContext);
  const { id, farmImg, farmName, farmLocation, farmDes, farmPrice } =
    props.item;
  return (
    <div className="Booking-Card">
      <div className="booking-card">
        <div className="booking-img">
          <img src={farmImg} alt="farm-image" />
        </div>
        <div className="booking-tutor-desc">
          <h4>{farmName}</h4>
          <p>{farmLocation} </p>
          <p>{farmDes}</p>
        </div>

        <div className="booking-price">
          <h3>{farmPrice} JD</h3>
          <p>per Day</p>
          <button
            className="btn-book"
            onClick={() => {
              if (logged) {
                history.push(`/bookingform/${id}/${farmPrice}/${farmName}`);
              } else {
                history.push("/login");
              }
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmCard;
