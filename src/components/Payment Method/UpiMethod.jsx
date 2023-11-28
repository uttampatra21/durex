import React from "react";

const UpiMethod = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="input_box">
        <input
          disabled
          type="tel"
          name=""
          className="name"
          placeholder="Pyatm: 6294718722@paytm"
          required
        />
        <i className="fa fa-credit-card icon"></i>
      </div>

      <div className="input_box">
        <input
          disabled
          type="tel"
          name=""
          className="name"
          placeholder="Google Pay : 6294718722@gpay"
          required
        />
        <i className="fa fa-credit-card icon"></i>
      </div>

      <div className="input_box">
        <input
          disabled
          type="tel"
          name=""
          className="name"
          placeholder="Phone Pay : 6294718722@paytm"
          required
        />
        <i className="fa fa-credit-card icon"></i>
      </div>
    </div>
  );
};

export default UpiMethod;
