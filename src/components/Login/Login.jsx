import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div id="refferal">
      <section>
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2 className="text-white text-2xl">Log In</h2>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required />
                <label className="label" for="">
                  User Id
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input className="input-input" type="password" required />
                <label className="label" for="">
                  Password
                </label>
              </div>

              <button className="button">Log In</button>
            </form>
            <div className="sign-up py-10 text-center">
              <p className="text-white">
                Didn't have an account ?{" "}
                <NavLink to="/signup">
                  <a className="text-blue-500">Sign Up</a>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
