import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
            <img width="120" src="/public/logo.png" />
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
          <ul
            tabIndex="0"
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content base-background rounded-box w-52"
          >
            {isAuthenticated ? (
              <li>
                <NavLink to="/dashboard">
                  <a>Profile</a>
                </NavLink>
              </li>
            ) : (
              <li>
                <a>
                  <button onClick={() => loginWithRedirect()}>Profile</button>
                </a>
              </li>
            )}

            <li>
              <a className="justify-between">
                NFT
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                  new
                </span>
              </a>
            </li>

            {isAuthenticated ? (
              <li>
                <a>Withdraw</a>
              </li>
            ) : (
              <li>
                <a>
                  <button onClick={() => loginWithRedirect()}>Withdraw</button>
                </a>
              </li>
            )}

            <li>
              <a>Store</a>
            </li>

            {isAuthenticated ? (
              <li>
                <a>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </a>
              </li>
            ) : (
              <li>
                <a>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
