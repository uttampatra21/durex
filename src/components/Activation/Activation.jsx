import React from "react";
import { NavLink } from "react-router-dom";

const Activation = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Thank you For Activation !</h2>
          <p className="text-white">
            You will receive your user id and password within 24 hours.{" "}
          </p>
          <div className="card-actions justify-end">
            <NavLink to="/">
              <button className="btn btn-primary">Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activation;
