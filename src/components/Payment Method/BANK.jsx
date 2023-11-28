import React from "react";

const BANK = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="input_box">
        <input
          disabled
          type="tel"
          name=""
          className="name"
          placeholder="SBI : 2452578474538"
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
          placeholder="IFSC : SBIN12453"
          required
        />
        <i className="fa fa-credit-card icon"></i>
      </div>
    </div>
  );
};

export default BANK;
