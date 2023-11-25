import React from "react";
import "./Task.css";
import { IoIosMore } from "react-icons/io";
import { FcNeutralTrading } from "react-icons/fc";
import { SiTemporal } from "react-icons/si";
const Task = () => {
  return (
    <div id="task">
      <div id="task-heading" className="flex items-center justify-between">
        <h1 class="text-3xl md:text-2xl font-bold ">Oct, 2020</h1>
        <p className=" flex text-white items-center font-bold rounded-full py-2 px-5">
          New
        </p>
      </div>
      <div className="">
        <div className="date-item">
          <div className="items">
            10 <sapn className="date">Oct</sapn>
          </div>
          <div className="items activ">
            11 <sapn className="date">Oct</sapn>
          </div>
          <div className="items activ">
            12 <sapn className="date">Oct</sapn>
          </div>
          <div className="items activ">
            13 <sapn className="date">Oct</sapn>
          </div>
        </div>
      </div>

      <div id="task-bar">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold opacity-80">Task</h3>
          <IoIosMore className="text-4xl" />
        </div>

        <div id="task-video" className="">
          <div className="item-status">
            <div className="task-logo">
              <FcNeutralTrading className="text-4xl" />
            </div>
            <div className="flex justify-between w-full p-5 items-center">
              <div className="">
                <h2>
                  <strong> Bitcoin</strong>
                </h2>
                <p>Cryptocurrency</p>
              </div>
              <div className="">
                <SiTemporal className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="item-status">
            <div className="task-logo">
              <FcNeutralTrading className="text-4xl" />
            </div>
            <div className="flex justify-between w-full p-5 items-center">
              <div className="">
                <h2>
                  <strong> Bitcoin</strong>
                </h2>
                <p>Cryptocurrency</p>
              </div>
              <div className="">
                <SiTemporal className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="item-status">
            <div className="task-logo">
              <FcNeutralTrading className="text-4xl" />
            </div>
            <div className="flex justify-between w-full p-5 items-center">
              <div className="">
                <h2>
                  <strong> Bitcoin</strong>
                </h2>
                <p>Cryptocurrency</p>
              </div>
              <div className="">
                <SiTemporal className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="item-status">
            <div className="task-logo">
              <FcNeutralTrading className="text-4xl" />
            </div>
            <div className="flex justify-between w-full p-5 items-center">
              <div className="">
                <h2>
                  <strong> Bitcoin</strong>
                </h2>
                <p>Cryptocurrency</p>
              </div>
              <div className="">
                <SiTemporal className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
