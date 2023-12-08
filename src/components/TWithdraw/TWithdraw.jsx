import React, { useState } from "react";
import Payment from "../Bank Details/Payment";
import "./TWithdraw.css";
const TWithdraw = () => {
  const storgeData =
    localStorage.getItem("userXdata") != null
      ? JSON.parse(localStorage.getItem("userXdata"))
      : [];

  const [payment, setPayment] = useState();

  const UPI = () => {
    setPayment(
      <Payment
        minimum={100}
        placeholder={"minimum ₹100"}
        paytm={
          <div className="form__group">
            <input
              required
              type="text"
              id="paytm"
              className="form__input"
              placeholder="12345@paytm"
            />
            <label for="paytm" className="form__label">
              Method Number
            </label>
          </div>
        }
      />
    );
  };
  

  const BANK = () => {
    setPayment(
      <Payment
        minimum={500}
        placeholder={"minimum ₹100"}
        account={
          <div className="form__group">
            <input
              required
              type="text"
              id="account"
              className="form__input"
              placeholder=""
            />
            <label for="account" className="form__label">
              Account Number
            </label>
          </div>
        }
        confirmaccount={
          <div className="form__group">
            <input
              required
              type="text"
              id="confirmaccount"
              className="form__input"
              placeholder=" "
            />
            <label for="confirmaccount" className="form__label">
              Confirm Account
            </label>
          </div>
        }
        IFSC={
          <div className="form__group">
            <input
              required
              type="text"
              id="ifsc"
              className="form__input"
              placeholder=" "
            />
            <label for="ifsc" className="form__label">
              IFSC
            </label>
          </div>
        }
      />
    );
  };

  return (
    <div>
      <div id="twithdraw">
        <div id="wallet-nav" className="">
          <div className="flex" id="walet-cont">
            <div className="bg-img">
              <img src="https://github.com/uttampatra21/public/raw/main/money.png" />
            </div>
            <div className="">
              <div className="flex flex-col justify-between gap-5 py-5">
                <button className="btn w-full btn-outline btn-warning ">
                  Task Income{" "}
                  <h1 className="flex items-start ">
                    <small>₹</small>
                    {storgeData.taskIncome}.00
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text-white py-5 font-bold opacity-80">
          CHOOSE PAYMENT METHOD
        </h1>
        <ul id="meth-ul">
          <li className="payment-meth" onClick={UPI}>
            <img src="https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/phonepe_logo.png?itok=kQwv5E2X" />
          </li>
          <li className="payment-meth" onClick={UPI}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" />
          </li>
          <li className="payment-meth" onClick={UPI}>
            <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" />
          </li>
          <li className="payment-meth" onClick={UPI}>
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
    </div>
  );
};

export default TWithdraw;
