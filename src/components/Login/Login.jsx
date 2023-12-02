import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const userData = useSelector((store) => store.userData);

  const [admin, setAdmin] = useState(
    <button className="button">Log In</button>
  );

  const password = (e) => {
    let pass = e.target.value;
    userData.map((x) => {
      if (pass == x.password) {
        setAdmin(
          <NavLink to="/dashboard">
            <button className="button">Log In</button>
          </NavLink>
        );
        localStorage.setItem("userXdata", JSON.stringify(x));
      }
    });
  };

  return (
    <div id="refferal">
      <section className="" id="login-sec">
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2 className="text-white text-2xl">Log In</h2>

              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required onChange={(e) => userID(e)} />
                <label className="label" for="">
                  User Id
                </label>
              </div>

              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="password"
                  required
                  onChange={(e) => password(e)}
                />
                <label className="label" for="">
                  Password
                </label>
              </div>

              {admin}
            </form>
            <div className="sign-up text-center" style={{ marginTop: "9px" }}>
              <NavLink to="/signup">
                <button
                  className="button"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Create Account
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
