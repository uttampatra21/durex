import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./Store.css";
import Sliders from "./Slider";
import Soloproduct from "./Soloproduct";
import StoreHeader from "./StoreHeader";

const SingelProduct = () => {
  return (
    <div className="bg-white">
      <StoreHeader />
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
