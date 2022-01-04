import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/BookingForm.css";
import Farms from "../components/Farms";
import Confirmation from "../components/Confirmation";

function BookingForm({ farms }) {
  let [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("loggedAccount"))
  );

  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));
  let { id, farmPrice } = useParams();
  const [submitted, setSubmitted] = useState(false);

  //State to pass reservation object to PopUp component
  const [test, setTest] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setUserInfo({ ...userInfo, [id]: value });
  };

  //****************** Start Date*******************//
  //Min and default//
  let lcl = JSON.parse(localStorage.getItem("reservations"));
  let found;
  let starting;
  let indx;
  // To allow user to make a new res one day after the old res ends if there is an old res in the local storage
  for (let i in lcl)
    if (lcl[i].id == id) {
      indx = i;
      let starting1 = new Date(lcl[i].end);
      let mid = starting1.getDate();
      starting1.setDate(mid + 1);

      let start = starting1.toISOString();
      starting = start.substring(0, 10);
      found = true;
    }

  //To set the minimum of starting date based on today if there is no res in the local storage
  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  const [valueCut, setValueCut] = useState(found ? starting : valueCut1);

  //****************** End Date*****************//
  //Min and default//

  // To calculate the minimum end date 7 days after the value of the start date
  let minEndDate = new Date(valueCut);
  let date = minEndDate.getDate();
  minEndDate.setDate(date + 1);
  let minEndString = minEndDate.toISOString();
  let minEndCut = minEndString.substring(0, 10);
  // the state that carries the min of end date
  const [valueCut2, setValueCut2] = useState(0);

  // To update the min of end date when the value of the start date changes
  useEffect(() => {
    setValueCut2(minEndCut);
  }, [valueCut]);

  const handleDateChange = (e) => {
    setValueCut(e.target.value);
  };
  const handleDateChange2 = (e) => {
    setValueCut2(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let reservation = {
      id: id,
      farmPrice: farmPrice,
      ...userInfo,
      tel: e.target.tel.value,
      start: valueCut,
      end: valueCut2,
      hour: e.target.hours.value,
    };

    // To show the POPUP message after clicking submit
    setSubmitted(true);
    // To carry the reservation object as a prop to the POPUP component
    setTest(reservation);
  };

  // convert the value selected by the user to a new date object then .getTime() calculates how many ms from 01-01-1970
  // Subtract the two ms value from each other
  // divide by 8640000 to convert to days
  let duration =
    (new Date(valueCut2).getTime() - new Date(valueCut).getTime()) / 86400000;
  const Total = farmPrice * duration;
  return (
    <div>
      <div className="farm-form-container ">
        <h1>Confirm Booking</h1>
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
                onChange={(e) => handleInputChange(e)}
                value={userInfo.username}
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                value={userInfo.lName}
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>
            <div className="texts" id="texts2">
              <input
                value={userInfo.email}
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
            <input
              onChange={(e) => handleDateChange(e)}
              value={valueCut}
              type="date"
              name="start"
              min={found ? starting : valueCut1}
            />
            <input
              onChange={(e) => handleDateChange2(e)}
              min={minEndCut}
              value={valueCut2}
              type="date"
              name="end"
            />
            <input required type="time" name="hours" />
          </div>
          <div className="total">
            <p className="state">{duration} Days</p>
            <p>Total : {Total}JOD</p>
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>
        {found && (
          <>
            <h2 className="register-label">
              You already have a reservation from {lcl[indx].start} to{" "}
              {lcl[indx].end}
            </h2>
          </>
        )}
      </div>
      {submitted && <Confirmation test={test} setSubmitted={setSubmitted} />}
    </div>
  );
}

export default BookingForm;
