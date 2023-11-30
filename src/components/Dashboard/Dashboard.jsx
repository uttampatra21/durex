import React, { useState } from "react";
import "./Dashboard.css";
import { FaUsers } from "react-icons/fa6";

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

  let data = storgeData.reffer.map((x) => {
    return (
      <tr>
        <td>
          <p>{x.username}</p>
        </td>
        <td>
          <span className={`status ${x.class}`}>{x.status}</span>
        </td>
      </tr>
    );
  });

  const d = new Date();
  let taskIncome = d.getHours() - 4;

  return (
    <>
      <div id="dashboard">
        <h1 className="text-center text-white pt-5 text-3xl">
          {storgeData.name}
        </h1>
        <div className="content">
          <main>
            {/* <!-- Insights --> */}
            <ul className="insights">
              <li>
                <i className="bx bx-calendar-check"></i>
                <span className="info">
                  <h3>₹ {taskIncome},00</h3>
                  <p>Task Income</p>
                </span>
              </li>
              <li>
                <i className="bx bx-show-alt"></i>
                <span className="info">
                  <h3>₹ {storgeData.refferalIncome},00</h3>
                  <p>Referral Income</p>
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
                <i className="bx bx-dollar-circle"></i>
                <span className="info">
                  <h3>₹ {storgeData.totalIncom},99</h3>
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
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Status</th>
                    </tr>
                  </thead>
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
