import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userLogin = useSelector((store) => store.adminPage);
  let userPassword = 0;

  if (
    (userLogin.id1 == "AXZYU09342GDGG" &&
      userLogin.password1 == "aw90xe3bhx2") ||
    (userLogin.id2 == "WENK92HKBFCKAKJA" &&
      userLogin.password2 == "kv2dkfdlf322") ||
    (userLogin.id3 == "AJSHFS443JHFJSH" &&
      userLogin.password3 == "fsdf24dfkjjkf") ||
    (userLogin.id4 == "QEIJWIOJWW242SKD" &&
      userLogin.password4 == "dkdsfeof24242kjf4") ||
    (userLogin.id5 == "CSNKJFDI90E98FS" &&
      userLogin.password5 == "kcjsdkfj32434xkcd") ||
    (userLogin.id6 == "AKDDW352556GGY" &&
      userLogin.password6 == "kvvs353kd34256dk") ||
    (userLogin.id7 == "LKD5748DHFDKLSF" &&
      userLogin.password7 == "kbn43433sflklsd") ||
    (userLogin.id8 == "OFHC548645WKDDLS" &&
      userLogin.password8 == "ss242cksdkl203") ||
    (userLogin.id9 == "LDFO833HDJHDJA99" &&
      userLogin.password9 == "sdjw232sdlk00990") ||
    (userLogin.id10 == "WSDS8833248LSDDLL" &&
      userLogin.password10 == "ddfghj2424580")
  ) {
    userPassword = 1001;
  } else {
    userPassword = 1001;
  }

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
              src="https://github.com/uttampatra21/public/raw/main/logo.png"
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

          {userPassword === 101 ? (
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
                <NavLink to="/activation">
                  <a className="justify-between">Activation</a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/refferal">
                  <a className="justify-between">Refferal</a>
                </NavLink>
              </li>

              <li>
                <a className="justify-between">
                  Store
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <a className="justify-between">
                  Bitcoin
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li onClick={() => (userPassword = 1001)}>
                <a>
                  <button>Log Out</button>
                </a>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content base-background rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Store
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <a className="justify-between">
                  Bitcoin
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Upcoming
                  </span>
                </a>
              </li>

              <li>
                <a>
                  <NavLink to="/login">
                    <button>Log In</button>
                  </NavLink>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
