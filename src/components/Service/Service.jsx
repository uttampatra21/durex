import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div id="service" className="py-5">
      <div className="text-center flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">
          Services
        </h1>
        <h3 className="text-xl mb-5 font-light text-white px-5">
          corporX is asia's largets business marketing strategy, which allows
          customers to customize their maximum earning potential. Our company
          holding world's largest stocks and share. The marketing campaign is
          designed to create revolution in the history of universe.
        </h3>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-emerald-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-teal-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-cyan-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
        </div>
      </div>
      <>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning font-bold ">
            What is the cost of membership ?
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success relative">
            <img
              src="https://github.com/uttampatra21/public/raw/main/p3.jpg"
              alt=""
            />
            <div className="whiteboard absolute text-8xl font-bold text-white">₹599</div>
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning font-bold ">
            Benefits of Having a Referral Program
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            <img src="https://github.com/uttampatra21/public/blob/main/159300017_3658779087510774_2235209905233737226_n.png?raw=true" />
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning font-bold ">
            How will I customize my maximum earning potential?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            <img src="https://github.com/uttampatra21/public/blob/main/1.jpg?raw=true" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Service;
