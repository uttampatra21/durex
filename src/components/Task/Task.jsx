import React from "react";
import "./Task.css";
import { FcNeutralTrading } from "react-icons/fc";
import { SiTemporal } from "react-icons/si";
const Task = () => {
  return (
    <div id="task" className="my-6">

      <div id="task-bar">
        <div class="text-center flex flex-col items-center max-w-xl mx-auto">
          <h1 class="text-3xl md:text-7xl font-bold mb-5 text-white">
            Daily Task
          </h1>
          <h3 class="text-md mb-5 font-light text-white px-4">
            Complete your daily tasks to unlock awesome rewards.
          </h3>
          <div class="text-center mb-10">
            <span class="inline-block w-1 h-1 rounded-full bg-sky-500 ml-1"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
            <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
            <span class="inline-block w-3 h-1 rounded-full bg-violet-500 ml-1"></span>
            <span class="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl text-white font-bold opacity-80">Task</h3>
          <img
            width="70"
            src="https://i.pinimg.com/originals/02/1b/0c/021b0c44bd101306f1f2b1286ed431d1.gif"
            alt=""
          />
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
