import React from "react";

const Payment = ({
  minimum,
  placeholder,
  paytm,
  IFSC,
  account,
  confirmaccount,
}) => {
  return (
    <div>
      <div id="withdraw">
        <form action="" class="form">
          <div class="form__group">
            <input
              required
              min={minimum}
              type="number"
              id="amount"
              class="form__input"
              placeholder={placeholder}
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
              Full Name
            </label>
          </div>

          <div class="form__group">
            <input
              required
              type="text"
              id="userid"
              class="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="userid" class="form__label">
              User ID
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
              id="pan"
              class="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="pan" class="form__label">
              PAN Number
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

          {paytm}
          {account}
          {confirmaccount}
          {IFSC}

          <button disabled class="form__button font-bold">
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
