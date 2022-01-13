import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/cart.css";
function Cart() {
  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!isLoggedIn) {
      history.push("/login");
    }
  }, []);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("reservations"));
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    let filteredData = data.filter((e) => e.email == user.email);
    setData(filteredData);
  }, []);

  function emptyCart() {
    setData([]);
    localStorage.setItem("reservations", JSON.stringify([]));
  }
  return data?.length ? (
    <div className="cart-container">
      <section>
        <table className="reservationall">
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
                <td>{reservations.priceAfter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="cartBtn1">
        <button className="emptyCart" onClick={emptyCart}>
          Empty Cart
        </button>
        <Link to="/">
          <button className="logOut">Back to Home</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="reservationEmpty">
      <h3>You didn't book any farm</h3>
      <Link to="/findFarm">
        <button className="backBtn">Back to booking</button>
      </Link>
    </div>
  );
}

export default Cart;
