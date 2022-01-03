import React from "react";
import { useParams } from "react-router-dom";
import "../styles/BookingForm.css";
import Farms from "../components/Farms";

function BookingForm() {
  const a = localStorage.getItem("loggedAccount");
  let { id, farmPrice } = useParams();

  return (
    <div>
      <div className="farm-form-container ">
        <h1>Confirm Booking</h1>
        <form className="form">
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
                value=""
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              <input
                value=""
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>
            <div className="texts" id="texts2">
              <input
                value=""
                required
                placeholder="Email"
                onChange={() => {
                  return null;
                }}
                type="email"
                name="email"
                id="email"
              />
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                placeholder="Mobile Number"
                name="tel"
                id="tel"
              />
            </div>
          </div>
          <div className="dates">
            <input value="" type="date" name="start" min="" />
            <input min="" value="" type="date" name="end" />
            <input required type="time" name="hours" />
          </div>
          <div className="total">
            <p className="state"> Days</p>
            <p>Total :{farmPrice} JOD</p>
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
