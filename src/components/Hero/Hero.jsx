import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Hero = () => {
  const admin = useSelector((store) => store.adminPage);

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

        {admin === 10 ? (
          <NavLink to="">
            <button
              className="text-2xl border-none text-white btn btn-accent"
              style={{ backgroundColor: "#e80566" }}
            >
              Get Started Now
            </button>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button
              className="text-2xl border-none text-white btn btn-accent"
              style={{ backgroundColor: "#e80566" }}
            >
              Join Now
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Hero;
