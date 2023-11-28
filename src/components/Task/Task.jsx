import React from "react";
import "./Task.css";
import { FcNeutralTrading } from "react-icons/fc";
import { SiTemporal } from "react-icons/si";
const Task = () => {
  const taskOne = () => {
    setTimeout(() => {
      window.location.href = "http://www.w3schools.com";
    }, 5000);
  };

  const taskTwo = () => {
    setTimeout(() => {}, 5000);
  };

  const taskThree = () => {
    setTimeout(() => {}, 5000);
  };

  const taskFour = () => {
    setTimeout(() => {}, 5000);
  };

  const loading = () => {
    let cnt = 0;
    let per = 0;
    let red;
    red = setInterval(() => {
      let bar = document.querySelector(".progress");
      let percentage = setInterval(() => {
        per += 1;
        if (per >= cnt) clearInterval(percentage);
        document.querySelector(".text").innerHTML = `<p>${per}%</p>`;
      }, 100);
      cnt += 10;

      if (cnt == 100) clearInterval(red);
      bar.style.width = cnt + "%";
      console.log(cnt);
    }, 1000);
  };
  loading();

  return (
    <div id="task" className="my-6">
      <div id="loadinng">
        <img src="https://i.gifer.com/fyDw.gif" />
        <div className="container">
          <div className="progress"></div>
        </div>
        <div className="text"></div>
      </div>

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
          <div className="item-status" onClick={taskOne}>
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

          <div className="item-status" onClick={taskTwo}>
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

          <div className="item-status" onClick={taskThree}>
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

          <div className="item-status" onClick={taskFour}>
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
