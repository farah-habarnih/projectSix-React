import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/confirmation.css";

function Confirmation(props) {
  const history = useHistory();

  const handleSubmit = () => {
    let lclArr = JSON.parse(localStorage.getItem("reservations"));
    lclArr.push(props.test);
    localStorage.setItem("reservations", JSON.stringify(lclArr));
    history.push("/");
  };
  return (
    <div className="popup-box">
      <div className="box">
        <div className="box-title">
          <h3>Are you sure ? </h3>
        </div>
        <div className="box-illustrate">
          <h6>
            You will not be able to cancel this resrvation, nor reserve this car
            before this reservation ends
          </h6>
        </div>
        <div className="box-btns">
          <button
            className="finalBtn-cancel"
            onClick={() => props.setSubmitted(false)}
          >
            Cancel
          </button>
          <button className="finalBtn" onClick={handleSubmit}>
            Yes, Explore More !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
