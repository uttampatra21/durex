import React, { useState } from "react";
import "./Wallet.css";
const Wallet = () => {
  let waletValue = 50;
  let type = true;
  return (
    <div id="wallet">
      <div id="wallet-nav" className="">
        <div className="flex" id="walet-cont">
          <div className="bg-img">
            <img src="/public/assets/money.png" />
          </div>

          <div className="">
            <div className="">
              <h1 className="flex items-start pt-5">
                <small>₹</small>
                {waletValue}.00
              </h1>
              <div className="flex items-center gap-5">
                <i className="bx arrow-down bxs-up-arrow"></i>{" "}
                <span>₹25 Today's Income</span>
              </div>
            </div>
            <div className="flex gap-3 py-10">
              <button class="btn btn-outline btn-warning">Buy Stocks</button>
              <button class="btn btn-outline btn-accent">Buy Store</button>
            </div>
          </div>
        </div>
      </div>

      <div id="withdraw">
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
      </div>
    </div>
  );
};

export default Wallet;
