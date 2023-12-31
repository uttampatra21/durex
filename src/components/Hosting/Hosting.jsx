import React from "react";
import { GiHidden } from "react-icons/gi";

const Hosting = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-5 text-gray-600">
          Hosting Partner
        </h1>
        <h3 className="text-xl mb-5 font-light">
          We are in partnership with world's largest hosting platform. Grow your
          business with netlify.
        </h3>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-emerald-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-teal-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-cyan-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
        </div>
        <iframe
          id="iframe"
          height="500px"
          frameBorder="0"
          width="100%"
          style={{ borer: "none", overflow: "hidden" }}
          src="https://www.netlify.com/"
          title="netlify"
        ></iframe>
      </div>
    </div>
  );
};

export default Hosting;
