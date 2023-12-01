import React from "react";
import "./Services.css";
import Cards from "../Cards/Cards";
import { NavLink } from "react-router-dom";
import { GiForwardSun } from "react-icons/gi";
import SmallCards from "../Cards/SmallCards";
import { FaFire } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const Services = () => {
  return (
    <div id="services">
      {/* CARDS */}
      <Cards />
      {/*  */}

      <div id="grid-2-col">
        <div className="right-cont">
          <h1>World Class Service Growth Your Business</h1>
          <p>
            We are committed to honor, encourage and support individuals and
            teams who contribute, through their behavior and actions, to the
            success of the organization i.e. we are one of the most successful
            company in India.
          </p>
          <ul>
            <li>
              <GiForwardSun style={{ color: "pink", fontSize: "2rem" }} />
              <span>Cost</span> Accounting Fundamentals
            </li>
            <li>
              <GiForwardSun style={{ color: "pink", fontSize: "2rem" }} />
              <span>Easy</span> Fund Withdrawal
            </li>
            <li>
              <GiForwardSun style={{ color: "pink", fontSize: "2rem" }} />
              <span>Extra</span> Referral Income
            </li>
            <li>
              <GiForwardSun style={{ color: "pink", fontSize: "2rem" }} />
              <span>24/7</span> Easy Support
            </li>
          </ul>
          <div className="py-4">
            <NavLink to="/service">
              <button
                className="text-2xl flex items-center border-none text-white btn btn-accent"
                style={{ backgroundColor: `rgb(232, 5, 102)` }}
              >
                View more <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
        </div>
        <div id="services-card" className="img grid-cols-2 grid">
          <SmallCards
            title="Customer Services"
            description="corporX support model ensures that a customer is able to get their issue resolved no matter what day or time it is."
            bgColor={"#0648b3"}
            white={"white"}
            logo={<FaUserAstronaut className="text-6xl" />}
          />
          <SmallCards
            title="Growth"
            description="WE FOLLOW THE GOOD PATH. Our success is measured not only in economic terms but by the respect, trust and corporX we earn."
            bgColor={"#05a677"}
            white={"white"}
            logo={<FaLightbulb className="text-6xl" />}
          />
          <SmallCards
            title="Opportunity"
            description="We provide the best business and earning opportunity we are here. To deliver exceptional quality platform of earning to urban and semi urban."
            bgColor={"#e80566"}
            white={"white"}
            logo={<FaFire className="text-6xl" />}
          />
          <SmallCards
            title="Support"
            description="We provide exceptional Financial services to a wide range of commercial and residential properties over many years, including large corporate environments. We believe in success, a process to make progress continuously."
            bgColor={"#1a2c79"}
            white={"white"}
            logo={<FaShapes className="text-6xl" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
