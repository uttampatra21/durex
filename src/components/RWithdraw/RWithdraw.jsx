import React, { useState } from "react";
import "./RWithdraw.css";
import Payment from "../Bank Details/Payment";
const RWithdraw = () => {
  const [payment, setPayment] = useState();

  const UPI = () => {
    setPayment(
      <Payment
        paytm={
          <div class="form__group">
            <input
              required
              type="text"
              id="phone"
              class="form__input"
              placeholder=" "
            />
            <label for="phone" class="form__label">
              Phone Number
            </label>
          </div>
        }
      />
    );
  };

  const BANK = () => {
    setPayment(<Payment />);
  };
  return (
    <div id="rwithdraw">
      <h1 className="text-center text-white py-5 font-bold opacity-80">
        PAYMENT METHOD
      </h1>
      <ul id="meth-ul">
        <li className="payment-meth" onClick={UPI}>
          <img src="https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/phonepe_logo.png?itok=kQwv5E2X" />
        </li>
        <li className="payment-meth">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" />
        </li>
        <li className="payment-meth">
          <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" />
        </li>
        <li className="payment-meth">
          <img src="https://getlogo.net/wp-content/uploads/2020/10/unified-payments-interface-upi-logo-vector.png" />
        </li>
        <li className="payment-meth" onClick={BANK}>
          <img src="https://nuvei.com/wp-content/uploads/2021/06/regular-bank-transfer.png" />
        </li>
      </ul>

      <div id="payment-detls" className="py-10">
        {payment}
      </div>
    </div>
  );
};

export default RWithdraw;
