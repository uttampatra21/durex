import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div id="signup">
      <section>
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2 className="text-white text-2xl">Create Account</h2>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input className="input-input" type="text" required id="" />
                <label className="label" for="">
                  Refferal ID
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required />
                <label className="label" for="">
                  Your Name
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input className="input-input" type="email" required />
                <label className="label" for="">
                  Email
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input className="input-input" type="text" required />
                <label className="label" for="">
                  Phone
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input className="input-input" type="text" required />
                <label className="label" for="">
                  PAN
                </label>
              </div>

              <button className="button">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
