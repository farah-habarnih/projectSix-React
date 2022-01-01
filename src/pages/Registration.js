import React, { useState, useContext, useEffect } from "react";
import Login from "../components/login";
import Signup from "../components/Signup";
import { UserContext } from "../App";
import "../styles/registration.css";

function Registration() {
  const {
    logged,
    setLogged,
    userLoginInformation,
    setUserLoginInformation,
    userSignupInformation,
    setUserSignupInformation,
    submitted,
    setSubmitted,
  } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [login_register, setlogin_register] = useState(false);
  return (
    <div>
      <div className="heading-div"></div>
      {login_register ? (
        <div className="Registration-App">
          <Signup
            setlogin_register={setlogin_register}
            login_register={login_register}
          />
          <img
            src="login3.png"
            className="signup-img"
            alt="sign up image"
          ></img>
        </div>
      ) : (
        <div className="login-App">
          <img
            src="login3.png"
            className="login-img"
            alt="login form image"
          ></img>
          <Login
            setlogin_register={setlogin_register}
            login_register={login_register}
          />
        </div>
      )}
    </div>
  );
}

export default Registration;
