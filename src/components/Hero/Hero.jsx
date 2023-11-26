import React from "react";
import "./Hero.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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

        {isAuthenticated ? (
          <NavLink to="dashboard">
            <button
              className="text-2xl border-none text-white btn btn-accent"
              style={{ backgroundColor: "#e80566" }}
            >
              Get Started Now
            </button>
          </NavLink>
        ) : (
          <>
          <button
            onClick={() => loginWithRedirect()}
            className="text-2xl border-none text-white btn btn-accent"
            style={{ backgroundColor: "#e80566" }}
          >
            Get Membership
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
