import React from "react";
import "./Hero.css";
import Cards from "../Cards/Cards";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-container">
        <h3>BUSINESS SOLUTIONS</h3>
        <h1>Your Most Trusted Business Partner</h1>
        <p>
          Holisticly procrastinate mission-critical convergence with reliable
          customer service. Assertively underwhelm idea-sharing for impactful
          solutions.
        </p>
        <NavLink to="dashboard">
        <button
          className="text-2xl border-none text-white btn btn-accent"
          style={{ backgroundColor: "#e80566" }}
        >
          Get Started Now
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
