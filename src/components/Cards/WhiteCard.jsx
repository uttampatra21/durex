import React from "react";

const WhiteCard = ({ img, title, p }) => {
  return (
    <div className="white-card">
      <img width="80" src={img} alt="" />
      <span style={{ fontSize: "24px" }}>{title}</span>
      <p>{p}</p>
    </div>
  );
};

export default WhiteCard;
