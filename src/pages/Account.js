import React, { useEffect, useState } from "react";
import "../styles/account.css";
import { Link, useHistory } from "react-router-dom";
import ManageReservations from "../components/ManageReservations";

function Account() {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!isLoggedIn) {
      history.push("/login");
    }
  }, []);

  return (
    <section className="account">
      <h2 className="accountTitle">My Account</h2>
      <ManageReservations />
    </section>
  );
}

export default Account;
