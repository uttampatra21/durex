import React from "react";
import "./Services.css";
import Cards from "../Cards/Cards";
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
            Convert your emails into tickets and keep them all organized in one
            place. Never leave customers' questions unanswered.
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
            <button
              className="text-2xl flex items-center border-none text-white btn btn-accent"
              style={{ backgroundColor: `rgb(232, 5, 102)` }}
            >
              View more <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div id="services-card" className="img grid-cols-2 grid">
          <SmallCards
            bgColor={"#0648b3"}
            white={"white"}
            logo={<FaUserAstronaut className="text-6xl" />}
          />
          <SmallCards
            bgColor={"#05a677"}
            white={"white"}
            logo={<FaLightbulb className="text-6xl" />}
          />
          <SmallCards
            bgColor={"#e80566"}
            white={"white"}
            logo={<FaFire className="text-6xl" />}
          />
          <SmallCards
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
