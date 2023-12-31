import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  let storgeData =
    localStorage.getItem("userXdata") != null
      ? JSON.parse(localStorage.getItem("userXdata"))
      : [];

  const [hederColor, setHeaderColor] = useState("transparent");
  window.addEventListener("scroll", () => {
    let lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 500) {
      setHeaderColor("rgb(23 37 100)");
    } else {
      setHeaderColor("#1a2c79");
    }
  });

  return (
    <div
      id="header"
      className="navbar flex items-center bg-base-100"
      style={{ backgroundColor: hederColor }}
    >
      <div className="flex-1">
        <NavLink to="/">
          <div className="btn btn-ghost text-xl text-black">
            <img
              width="130px"
              src="https://github.com/uttampatra21/public/blob/main/logo%20-%20Copy.png?raw=true"
            />
          </div>
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <i className="text-3xl bx bx-menu"></i>
            </div>
          </label>

          {storgeData.password != null ? (
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content base-background rounded-box w-52"
            >
              <li>
                <NavLink to="/dashboard">
                  <a>Dashboard</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/wallet">
                  <a>Wallet</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/task">
                  <a className="justify-between">Task</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/refferal">
                  <a className="justify-between">Refferal</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/store">
                  <a className="justify-between">Store</a>
                </NavLink>
              </li>

              <li>
                <a className="justify-between">
                  Bitcoin
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <a className="justify-between">
                  Gold
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <NavLink to="/services">
                  <a>
                    <button>Service</button>
                  </a>
                </NavLink>
              </li>

              <li
                onClick={() =>
                  (storgeData = localStorage.setItem(
                    "userXdata",
                    JSON.stringify("")
                  ))
                }
              >
                <NavLink to="/login">
                  <a>
                    <button>Log Out</button>
                  </a>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content base-background rounded-box w-52"
            >
              <li>
                <NavLink to="/store">
                  <a className="justify-between">Store</a>
                </NavLink>
              </li>

              <li>
                <a className="justify-between">
                  Bitcoin
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <a className="justify-between">
                  Gold
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <NavLink to="/services">
                  <a>
                    <button>Service</button>
                  </a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/login">
                  <a>
                    <button>Log In</button>
                  </a>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
