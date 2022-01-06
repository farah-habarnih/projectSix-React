import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
function Cart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("reservations"));
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    let filteredData = data.filter((e) => e.email == user.email);
    setData(filteredData);
  }, []);
  return data?.length ? (
    <div className="cart-container">
      <section>
        <table className="reservation">
          <thead className="reservationTable">
            <th>Name</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Total Price</th>
            <th></th>
          </thead>
          <tbody>
            {data.map((reservations) => (
              <tr className="reservationTable2">
                <td>{reservations.email}</td>
                <td>{reservations.start}</td>
                <td>{reservations.end}</td>
                <td>{reservations.farmPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  ) : (
    <div className="reservationBack">
      <h5>You didn't pick any lesson</h5>
      <Link to="/findFarm">
        <button className="backBtn">Back to reserve</button>
      </Link>
    </div>
  );
}

export default Cart;
