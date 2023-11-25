import React from "react";
import "./Wallet.css";
const Wallet = () => {
  let waletValue = 1050;
  return (
    <div id="wallet">
      <div id="wallet-nav" className="">
        <div className="flex" id="walet-cont">
          <div className="bg-img">
            <img src="/public/img/money.png" />
          </div>

          <div className="">
            <div className="">
              <h1 className="flex items-start pt-5">
                <small>₹</small>
                89,999.00
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
              min="1050"
              type="number"
              id="email"
              class="form__input"
              placeholder="minimum ₹1050"
              autocomplete="off"
            />
            <label for="email" class="form__label">
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
              id="password"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Phone Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="text"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Pan Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="text"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Account Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="text"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Confirm Account Number
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="text"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              IFSC
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="text"
              class="form__input"
              placeholder=" "
            />
            <label for="password" class="form__label">
              User Code
            </label>
          </div>

          <button
            disabled
            style={{ textDecoration: "line-through" }}
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
