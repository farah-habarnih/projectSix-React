import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/manageReservations.css";
function ManageReservations() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("reservations"));
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    let filteredData = data.filter((e) => e.email == user.email);
    setData(filteredData);
  }, []);
  return data?.length ? (
    <>
      <table className="reservationLeft">
        <thead className="reservationTable">
          <th>Name</th>
          <th>Start Date</th>
          <th>End Time</th>
          <th>Total Price</th>
          <th></th>
        </thead>
        <tbody>
          {data.map((reservations) => (
            <tr className="reservationTable2">
              <td>{reservations.farmName}</td>
              <td>{reservations.start}</td>
              <td>{reservations.end}</td>
              <td>{reservations.farmPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <div className="reservationBack">
      <h5>You didn't pick any farm</h5>
      <Link to="/findFarm">
        <button className="backBtn">Back to booking</button>
      </Link>
    </div>
  );
}

export default ManageReservations;
