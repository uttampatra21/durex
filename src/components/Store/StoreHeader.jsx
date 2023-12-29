import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const StoreHeader = () => {
  const bagItem = useSelector((store) => store.bag);

  return (
    <div className="bg-white">
      <nav className="section__items__container nav__container">
        <a href="#" className="nav__logo">
          corporX
        </a>
        <ul className="nav__links">
          <li className="link">
            <a href="#">HOME</a>
          </li>
          <li className="link">
            <a href="#">SHOP</a>
          </li>
          <li className="link">
            <a href="#">PAGES</a>
          </li>
          <li className="link">
            <a href="#">BLOG</a>
          </li>
          <li className="link">
            <a href="#">LOOKBOOK</a>
          </li>
        </ul>
        <div className="nav__icons">
          <span>
            <NavLink to="/dashboard">
              <CiUser />
            </NavLink>
          </span>
          <span>
            <CiSearch />
          </span>
          <span>
            <NavLink to="/bag" className="relative">
              <IoBagHandleOutline />
              <small className="absolute bottom-[10px] h-5 w-5 flex items-center justify-center p-1 bg-green-500 rounded-full left-[19px] text-white">
                {bagItem.length}
              </small>
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default StoreHeader;
