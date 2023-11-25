import React from "react";

const WhiteCard = ({ img, title, p }) => {
  return (
    <div className="white-card">
      <img width="80" src={img} alt="" />
      <h1>{title}</h1>
      <p>{p}</p>
    </div>
  );
};

export default WhiteCard;
