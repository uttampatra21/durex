import React from "react";
import "./Payment.css";
import { useState } from "react";
import UpiMethod from "../Payment Method/UpiMethod";
import BANK from "../Payment Method/BANK";
import { NavLink } from "react-router-dom";

const Payment = () => {
  /*
------------------------ METHODS
*/
  const [method, setMethod] = useState(<UpiMethod />);
  const upi = () => {
    setMethod(<UpiMethod />);
  };

  const bank = () => {
    setMethod(<BANK />);
  };

  /*
------------------------ TRANS VALUE
*/

  const [transBtn, setTransBtn] = useState(
    <button disabled>GET USER ID</button>
  );
  const transValue = (e) => {
    let transVal = e.target.value;
    let transLength = transVal.length;
    if (transLength >= 6) {
      setTransBtn(
        <NavLink to="/activation">
          <button type="submit" onClick={(e) => submitForm(e)}>
            GET USER ID
          </button>
        </NavLink>
      );
    } else {
      setTransBtn(<button disabled>GET USER ID</button>);
    }
  };
  /*
------------------------ POP UP MESSEGE
*/
  const popup = () => {
    alert();
  };
  // --------------- ONSUBMIT

  const submitForm = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxv8R06voeh0vSKzUS9877Mrs7tZHWkbItn7zYfZTtGi7QeOTunScrf2jyg_-1c03Zf/exec";
    const form = document.forms["paymentSheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("You are welcome"))
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div id="payment-us">
      <div className="wrapper">
        <h2>Active Your Account</h2>
        <form name="paymentSheet">
          {/* <!--Account Information Start--> */}
          <h4>Account</h4>

          <div className="input_group">
            <div className="input_box">
              <input
                type="text"
                placeholder="Referral Name"
                required
                className="name"
                name="Referral Name"
              />
              <i className="fa fa-user icon"></i>
            </div>

            <div className="input_box">
              <input
                name="Referral Id"
                type="text"
                placeholder="Referral Id"
                required
                className="name"
              />
              <i className="fa fa-calendar icon"></i>
            </div>
          </div>

          <div className="input_group">
            <div className="input_box">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="name"
                name="Your Name"
              />
              <i className="fa fa-user icon"></i>
            </div>
          </div>

          <div className="input_group">
            <div className="input_box">
              <input
                name="Your Email"
                type="email"
                placeholder="Email Address"
                required
                className="name"
              />
              <i className="fa fa-envelope icon"></i>
            </div>
          </div>

          <div className="input_group">
            <div className="input_box">
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="name"
                name="Phone Number"
              />
              <i className="fa fa-phone icon" aria-hidden="true"></i>
            </div>
          </div>

          <div className="input_group">
            <div className="input_box">
              <input
                type="text"
                placeholder="PAN Number"
                required
                className="name"
                name="PAN Number"
              />
              <i className="fa fa-user icon"></i>
            </div>
          </div>

          {/* <!--Account Information End--> */}

          {/* <!--DOB & Gender Start--> */}
          <div className="input_group">
            <div className="input_box">
              <h4>Date Of Birth</h4>
              <input type="text" placeholder="DD" required className="dob" />
              <input type="text" placeholder="MM" required className="dob" />
              <input type="text" placeholder="YYYY" required className="dob" />
            </div>
            <div className="input_box">
              <h4>Gender</h4>
              <input
                type="radio"
                name="gender"
                className="radio"
                id="b1"
                checked
              />
              <label for="b1">Male</label>
              <input type="radio" name="gender" className="radio" id="b2" />
              <label for="b2">Female</label>
            </div>
          </div>
          {/* <!--DOB & Gender End--> */}

          {/* <!--Payment Details Start--> */}
          <div className="input_group">
            <div className="input_box">
              <h4>Payment Details</h4>
              <input
                type="radio"
                name="pay"
                className="radio"
                id="bc1"
                checked
              />
              <label for="bc1" onClick={() => upi()}>
                <span className="font-bold">UPI</span>
              </label>
              <input type="radio" name="pay" className="radio" id="bc2" />
              <label for="bc2" onClick={() => bank()}>
                <span className="font-bold">BANK</span>
              </label>
            </div>
          </div>

          <div className="flex gap-5 flex-col">{method}</div>
          <br />

          <div className="input_box">
            <input
              onChange={(e) => transValue(e)}
              type="text"
              placeholder="Transaction Id"
              required
              className="name"
              name="Transaction Id"
            />
            <i className="fa fa-rss icon" aria-hidden="true"></i>
          </div>

          <br />

          {/* <!--Payment Details End--> */}

          <div className="input_group">
            <div className="input_box">{transBtn}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
