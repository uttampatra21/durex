import React from "react";
import "./Payment.css";
import { useSelector } from "react-redux";

const Payment = () => {
  const paymentValue = useSelector((store) => store.paymentUs);
  console.log(paymentValue);
  if (paymentValue == 12) {
    console.log(12);
  } else {
    console.log(2);
  }
  return <div id="payment-us"></div>;
};

export default Payment;
