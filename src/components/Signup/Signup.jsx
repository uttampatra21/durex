import { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
const Signup = () => {
  const [displayNone, setLineThrough] = useState("none");
  const refferId = (e) => {
    let refferValue = e.target.value;
    refferValue.length > 12 ? setLineThrough("block") : setLineThrough("none");
  };

  return (
    <div id="signup">
      <section className="section">
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2 className="text-white text-2xl">Create Account</h2>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  onChange={(e) => refferId(e)}
                  className="input-input"
                  type="text"
                  required
                  id=""
                  name="RefferId"
                />
                <label className="label" for="">
                  Refferal ID
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required name="Refferal Name" />
                <label className="label" for="">
                  Refferal Name
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required name="Your Name" />
                <label className="label" for="">
                  Your Name
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="email"
                  required
                  name="Email"
                />
                <label className="label" for="">
                  Email
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="Phone Number"
                />
                <label className="label" for="">
                  Phone
                </label>
              </div>

              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className="input-input"
                  type="text"
                  required
                  name="PAN Number"
                />
                <label className="label" for="">
                  PAN
                </label>
              </div>

              <NavLink to="/payment">
                <button className="button" style={{ display: displayNone }}>
                  Next
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
