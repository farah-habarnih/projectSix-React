import React, { useState, useEffect, useContext } from "react";
import "../styles/manageProfile.css";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
function ManageProfile() {
  let history = useHistory();

  const { setLogged } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!isLoggedIn) {
      history.push("/login");
    }
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    setUser(user);
  }, []);
  const handelUserName = (e) => {
    let newUser = user;
    newUser.username = e.target.value;
    setUser({ ...newUser });
  };
  const handelPassword = (e) => {
    let newPassword = user;
    newPassword.password = e.target.value;
    setUser({ ...newPassword });
  };

  const updateUser = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedAccount", JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem("user"));
    users.map((e) => {
      if (e.email == user.email) {
        e.password = user.password;
        e.username = user.username;
      }
    });
    localStorage.setItem("user", JSON.stringify(users));
  };
  const logOut = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("loggedAccount", "");
    setLogged(false);
    history.push("/");
  };
  return (
    <section className="manageProfile">
      <div className="personalInformation">
        <form>
          <div className="accountDiv">
            <label className="profileLabel">UserName</label>
            <br />
            <input
              className="profileInput"
              type="text"
              value={user.username}
              onChange={(event) => handelUserName(event)}
            />
          </div>
          <div className="accountDiv">
            <label className="profileLabel">Password</label>
            <br />
            <input
              className="profileInput"
              type="password"
              value={user.password}
              onChange={(event) => handelPassword(event)}
            />
          </div>
          <div className="accountDiv">
            <label className="">Email</label>
            <br />
            <input
              className="profileInput"
              type="email"
              disabled
              value={user.email}
            />
          </div>

          <div className="profileBtn1">
            <button className="profileBtn" onClick={updateUser}>
              Submit
            </button>
            <button className="logOut" onClick={logOut}>
              Log out
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ManageProfile;
