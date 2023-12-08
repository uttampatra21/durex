import React, { useState } from "react";
import "./Dashboard.css";
import { FaUsers } from "react-icons/fa6";
import RaffrailNames from "../Raffrail/RaffrailNames";

const Dashboard = () => {
  const storgeData =
    localStorage.getItem("userXdata") != null
      ? JSON.parse(localStorage.getItem("userXdata"))
      : [];

  const [dNone, setNone] = useState("none");
  const searchDisplay = () => {
    setNone("block");
  };

  const searchValue = () => {};

  const pagiNation = () => {
    let filter = storgeData.reffer.slice(0, 3);
  };
  pagiNation();

  let data = storgeData.reffer.map((x) => {
    return <RaffrailNames x={x} />;
  });

  const d = new Date();
  let taskIncome = d.getHours() - 14;

  return (
    <>
      <div id="dashboard">
        <div className="content">
          <main id="dashboard-main" style={{ padding: "20px 0" }}>
            <div className="wrapper" style={{ backgroundColor: "transparent" }}>
              <h2 id="username">{storgeData.name}</h2>
            </div>
            {/* <!-- Insights --> */}
            <ul className="insights">
              <li>
                <i className="bx bx-calendar-check"></i>
                <span className="info">
                  <h3>₹ {storgeData.taskIncome + taskIncome},00</h3>
                  <p>Task Income</p>
                </span>
              </li>
              <li>
                <i className="bx bx-line-chart"></i>
                <span className="info">
                  <h3>{storgeData.reffer.length}</h3>
                  <p>Referral</p>
                </span>
              </li>

              <li>
                <i className="bx bx-show-alt"></i>
                <span className="info">
                  <h3>₹ {storgeData.reffer.length * 100},00</h3>
                  <p>Referral Income</p>
                </span>
              </li>

              <li>
                <i className="bx bx-dollar-circle"></i>
                <span className="info">
                  <h3>
                    ₹ {storgeData.totalIncome}
                    ,99
                  </h3>
                  <p>Total Income</p>
                </span>
              </li>
            </ul>
            {/* <!-- End of Insights --> */}

            <div className="bottom-data">
              <div className="orders">
                <div className="header flex items-center">
                  <FaUsers />
                  <h3>Refferal User</h3>
                  <div className="flex items-center">
                    <input
                      onChange={(e) => searchValue(e)}
                      type="text"
                      id="search"
                      className=" w-20 border-none outline-none"
                      style={{ backgroundColor: "transparent", display: dNone }}
                    />
                    <label
                      onClick={searchDisplay}
                      htmlFor="search"
                      className="flex items-center mt-1"
                    >
                      <i className="bx bx-search "></i>
                    </label>
                  </div>
                </div>
                <div id="reffer-users">
                  <div id="status" className="flex justify-between">
                    <span>User</span>
                    <span>Status</span>
                  </div>
                </div>
                <table>
                  <tbody>{data}</tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
