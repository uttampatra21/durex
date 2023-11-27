import React, { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import "./Wallet.css";
import { NavLink } from "react-router-dom";
const Wallet = () => {
  let waletValue = 50;
  let type = true;
  return (
    <div id="wallet">
      <div id="wallet-nav" className="">
        <div className="flex" id="walet-cont">
          <div className="bg-img">
            <img src="https://github.com/uttampatra21/public/raw/main/money.png" />
          </div>

          <div className="">
            <div className="flex flex-col justify-between gap-5 py-5">
              <NavLink to="/tWithdraw">
                <button class="btn w-full btn-outline btn-warning ">
                  Task Income{" "}
                  <h1 className="flex items-start ">
                    <small>₹</small>
                    {waletValue}.00
                  </h1>
                </button>
              </NavLink>

              <NavLink to="/rWithdraw">
                <button class="btn btn-outline btn-accent">
                  Refferal Income{" "}
                  <h1 className="flex items-start ">
                    <small>₹</small>
                    {waletValue}.00
                  </h1>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div id="payment" className="py-5">
        <div class="text-center flex flex-col items-center max-w-xl mx-auto">
          <h1 class="text-3xl md:text-7xl font-bold mb-5 text-white">
            Payment Partner
          </h1>
          <h3 class="text-md mb-5 font-light text-white px-4">
            Our global payment partners constantly giving seamless withdrawl
            experience. Additionally we are providing no payment charges.
          </h3>
          <div class="text-center mb-10">
            <span class="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-emerald-500 ml-1"></span>
            <span class="inline-block w-40 h-1 rounded-full bg-teal-500"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-cyan-500 ml-1"></span>
            <span class="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
          </div>
        </div>

        <ul id="meth-ul">
          <li className="payment-meth">
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
          <li className="payment-meth">
            <img src="https://nuvei.com/wp-content/uploads/2021/06/regular-bank-transfer.png" />
          </li>
        </ul>
      </div>

      {/* <div id="withdraw">
        <form action="" class="form">
          <div class="form__group">
            <input
              required
              min="500"
              type="number"
              id="amount"
              class="form__input"
              placeholder="minimum ₹500"
              autocomplete="off"
            />
            <label for="amount" class="form__label">
              Withdrawl Amount
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="email"
              class="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="email" class="form__label">
              Username
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="email"
              id="password"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Email
            </label>
          </div>

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

          <div class="form__group">
            <input
              required
              type="text"
              id="pan"
              class="form__input"
              placeholder=" "
            />
            <label for="pan" class="form__label">
              Pan Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="account"
              class="form__input"
              placeholder=" "
            />
            <label for="account" class="form__label">
              Account Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="caccount"
              class="form__input"
              placeholder=" "
            />
            <label for="caccount" class="form__label">
              Confirm Account Number
            </label>
          </div>

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

          <div class="form__group">
            <input
              required
              type="text"
              id="user"
              class="form__input"
              placeholder=" "
            />
            <label for="user" class="form__label">
              User Code
            </label>
          </div>

          <button
            disabled
            style={{
              textDecoration: waletValue === 500 ? "auto" : "line-through",
            }}
            class="form__button font-bold"
          >
            Withdraw
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Wallet;
