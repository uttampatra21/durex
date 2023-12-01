import React from "react";
const SmallCards = ({ bgColor, logo, white, title, description }) => {
  return (
    <div>
      <div className="p-4 w-full">
        <center
          style={{ backgroundColor: bgColor, color: white }}
          className="border-2 flex flex-col gap-4 items-center px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110"
        >
          {logo}
          <h2 id="service-id" className="title-font font-medium text-3xl">
            {title}
          </h2>
          <p className="leading-relaxed">{description}</p>
        </center>
      </div>
    </div>
  );
};

export default SmallCards;
