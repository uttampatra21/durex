import React from "react";
import "./Bestqualityservices.css";
import WhiteCard from "../Cards/WhiteCard";
const Bestqualityservices = () => {
  return (
    <div className="qualityservices">
      <div className="text-center flex flex-col items-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          Best Quality Services
        </h1>
        <h3 className="text-xl mb-5 font-light">
          Efficiently aggregate core competencies without maintainable ideas.
          Dynamically foster tactical solutions without enabled value.
        </h3>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-violet-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
        </div>
      </div>

      <div id="quality-services" className="grid grid-cols-3 py-12 gap-8">
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-2.svg"}
          title={"Financial Planning"}
          p={
            "You can never go wrong with our own top-notch dedicated with communities services"
          }
        />
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-1.svg"}
          title={"Business Growth"}
          p={
            "We can guarantee an excellent experience and loading time for your successful"
          }
        />
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-3.svg"}
          title={"Saving Strategy"}
          p={
            "With full root access you will be able to take full control of your server very easy"
          }
        />
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-4.svg"}
          title={"Marketing Solutions"}
          p={
            "Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP"
          }
        />
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-6.svg"}
          title={"Total SEO Solutions"}
          p={
            "If you’re not 100% satisfied with Hostlar, we’ll refund your payment no risk"
          }
        />
        <WhiteCard
          img={"https://corporx.themetags.com/assets/img/icon/icon-8.svg"}
          title={"Business Security"}
          p={
            "One of many premium features is a dedicated IP cheapest VPS hosting plan"
          }
        />
      </div>
    </div>
  );
};

export default Bestqualityservices;
