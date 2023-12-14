import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./Store.css";
import Sliders from "./Slider";
import Soloproduct from "./Soloproduct";

const SingelProduct = () => {
 

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
            <NavLink to="/bag">
              <IoBagHandleOutline />
            </NavLink>
          </span>
        </div>
      </nav>

      {/* 
      ------------>
      */}
      <div className="">
        <Soloproduct />
      </div>

      {/* 
      ------------------>
      */}

      <div className="p-20">
        <h1 className="text-2xl font-bold tracking-wide">
          You Might Also Like
        </h1>

        <div className="">
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default SingelProduct;
