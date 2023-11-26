import React from "react";
import "./Task.css";
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
      

      <div id="task-bar">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl text-white font-bold opacity-80">Task</h3>
          <img width="70" src="https://i.pinimg.com/originals/02/1b/0c/021b0c44bd101306f1f2b1286ed431d1.gif" alt="" />
        </div>

        <div id="task-video" className="">
          <div className="item-status">
            <div className="task-logo">
              <FcNeutralTrading className="text-4xl" />
            </div>
            <div className="flex justify-between w-full p-5 items-center">
              <div className="">
                <h3>
                  <strong> Bitcoin</strong>
                </h3>
                <small>Cryptocurrency</small>
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
                <h3>
                  <strong> Bitcoin</strong>
                </h3>
                <small>Cryptocurrency</small>
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
                <h3>
                  <strong> Bitcoin</strong>
                </h3>
                <small>Cryptocurrency</small>
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
                <h3>
                  <strong> Bitcoin</strong>
                </h3>
                <small>Cryptocurrency</small>
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
