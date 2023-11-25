import React from "react";
import "./Bestqualityservices.css";
import WhiteCard from "../Cards/WhiteCard";
const Bestqualityservices = () => {
  return (
    <div className="qualityservices">
      <h1>Best Quality Services</h1>
      <p>
        Efficiently aggregate core competencies without maintainable ideas.
        Dynamically foster tactical solutions without enabled value.
      </p>

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
