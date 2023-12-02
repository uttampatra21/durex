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
        <form action="" className="form">
          <div className="form__group">
            <input
              required
              min={minimum}
              type="number"
              id="amount"
              className="form__input"
              placeholder={placeholder}
              autocomplete="off"
            />
            <label for="amount" className="form__label">
              Withdrawl Amount
            </label>
          </div>

          <div className="form__group">
            <input
              required
              type="text"
              id="email"
              className="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="email" className="form__label">
              Full Name
            </label>
          </div>

          <div className="form__group">
            <input
              required
              type="text"
              id="userid"
              className="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="userid" className="form__label">
              User ID
            </label>
          </div>

          <div className="form__group">
            <input
              required
              type="email"
              id="password"
              className="form__input"
              placeholder=" "
            />
            <label for="password" className="form__label">
              Email
            </label>
          </div>

          <div className="form__group">
            <input
              required
              type="text"
              id="pan"
              className="form__input"
              placeholder=" "
              autocomplete="off"
            />
            <label for="pan" className="form__label">
              PAN Number
            </label>
          </div>

          <div className="form__group">
            <input
              required
              type="text"
              id="phone"
              className="form__input"
              placeholder=" "
            />
            <label for="phone" className="form__label">
              Phone Number
            </label>
          </div>

          {paytm}
          {account}
          {confirmaccount}
          {IFSC}

          <button disabled className="form__button font-bold">
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
