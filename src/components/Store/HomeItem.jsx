import React from "react";

const HomeItem = ({ x }) => {
  return (
    <div className="musthave__card">
      <img src={x.img} alt="must have" />
      <h4 className="">{x.title}</h4>
      <p className="">
        <del className="">₹{x.currentPrice}.00</del> ₹{x.discountPrice}.00
      </p>
    </div>
  );
};

export default HomeItem;
