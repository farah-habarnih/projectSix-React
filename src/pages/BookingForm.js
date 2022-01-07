import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../styles/BookingForm.css";

function BookingForm() {
  const history = useHistory();
  let [userInfo] = useState(JSON.parse(localStorage.getItem("loggedAccount")));

  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));
  let { farmPrice, id, farmName } = useParams();

  let lastReservation = JSON.parse(localStorage.getItem("reservations"));
  let found;
  let starting;

  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  const [valueCut, setValueCut] = useState(found ? starting : valueCut1);

  let minEndDate = new Date(valueCut);
  let date = minEndDate.getDate();
  minEndDate.setDate(date + 1);
  let minEndString = minEndDate.toISOString();
  let minEndCut = minEndString.substring(0, 10);
  const [valueCut2, setValueCut2] = useState(0);

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
      start: valueCut,
      end: valueCut2,
      hour: e.target.hours.value,
      farmName: farmName,
      total: Total,
    };

    lastReservation.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(lastReservation));
    history.push("/");
  };

  let duration =
    (new Date(valueCut2).getTime() - new Date(valueCut).getTime()) / 86400000;
  const Total = farmPrice * duration;
  return (
    <div>
      <div className="farm-form">
        <h1>Confirm Booking</h1>
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="dates">
            <label className="dates-label">
              Start Date
              <input
                onChange={(e) => handleDateChange(e)}
                value={valueCut}
                type="date"
                name="start"
                min={found ? starting : valueCut1}
              />
            </label>
            <label className="dates-label">
              End Date
              <input
                onChange={(e) => handleDateChange2(e)}
                min={minEndCut}
                value={valueCut2}
                type="date"
                name="end"
              />
            </label>
            <label className="dates-label">
              Arrive Time
              <input required type="time" name="hours" />
            </label>
            {/* <input
              type="text"
              className="table-input"
              placeholder="Insert coupon"
              id="coupon"
            /> */}
          </div>
          <div className="total">
            <p className="state">Booking period: {duration} Days</p>
            <p>Total Price : {Total}JOD</p>
            {/* <p>
              Total after discount :{Math.round(Total * (1 - 0.2) * 100) / 100}
            </p> */}
          </div>
          <div className="Btns">
            <div className="submit">
              <input type="submit" value="Book Now" />
            </div>
            {/* <div className="submit">
              <input type="submit" value="Apply Coupon" />
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
