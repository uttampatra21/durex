import React from "react";
import "./Activation.css";
import { NavLink } from "react-router-dom";
const Activation = () => {
  return (
    <div id="activation">
      <section id="section">
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2 className="text-white text-2xl">Active Your Account</h2>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required name="User Id" />
                <label className="label" for="">
                  User Id
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="User Name"
                />
                <label className="label" for="">
                  User Name
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="User Phone Number"
                />
                <label className="label" for="">
                  User Phone Number
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="Refferal Id"
                />
                <label className="label" for="">
                  Refferal Id
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="Refferal Name"
                />
                <label className="label" for="">
                  Refferal Name
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="Refferal Phone Number"
                />
                <label className="label" for="">
                  Refferal Phone Number
                </label>
              </div>

              <button className="button">Activate Account</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activation;
