import React, { useState } from "react";
import "./RWithdraw.css";
import Payment from "../Bank Details/Payment";
const RWithdraw = () => {
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
          <div class="form__group">
            <input
              required
              type="text"
              id="paytm"
              class="form__input"
              placeholder="12345@paytm"
            />
            <label for="paytm" class="form__label">
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
          <div class="form__group">
            <input
              required
              type="text"
              id="account"
              class="form__input"
              placeholder=""
            />
            <label for="account" class="form__label">
              Account Number
            </label>
          </div>
        }
        confirmaccount={
          <div class="form__group">
            <input
              required
              type="text"
              id="confirmaccount"
              class="form__input"
              placeholder=" "
            />
            <label for="confirmaccount" class="form__label">
              Confirm Account
            </label>
          </div>
        }
        IFSC={
          <div class="form__group">
            <input
              required
              type="text"
              id="ifsc"
              class="form__input"
              placeholder=" "
            />
            <label for="ifsc" class="form__label">
              IFSC
            </label>
          </div>
        }
      />
    );
  };

  let n = 10;
  return (
    <div id="rwithdraw">
      <div id="wallet-nav" class="">
        <div class="flex" id="walet-cont">
          <div class="bg-img">
            <img src="https://github.com/uttampatra21/public/raw/main/money.png" />
          </div>
          <div class="">
            <div class="flex flex-col justify-between gap-5 py-5">
              <button class="btn btn-outline btn-accent">
                Refferal Income{" "}
                <h1 class="flex items-start ">
                  <small>₹</small>
                  {storgeData.rffBalance}
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
  );
};

export default RWithdraw;
