import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/Navbar";
import Registration from "./pages/Registration";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import "./styles/App.css";
import Error from "./components/error";
import About from "./pages/About";
import FindFarm from "./pages/FindFarm";
import Farms from "./components/Farms";
import BookingForm from "./pages/BookingForm";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
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
  const [farms, setFarm] = useState(Farms);
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
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Registration />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/findFarm">
              <FindFarm />
            </Route>
            <Route path="/bookingform/:id/:farmPrice">
              <BookingForm farms={farms} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
