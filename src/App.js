import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";
export const UserContext = createContext();

function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, []);
  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{
            logged,
            setLogged,
            userLoginInformation,
            setUserLoginInformation,
            userSignupInformation,
            setUserSignupInformation,
            submitted,
            setSubmitted,
          }}
        >
          <NavBar isLoggedIn={logged} />
          <ScrollToTop />
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
