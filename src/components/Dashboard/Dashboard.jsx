import React, { useState } from "react";
import "./Dashboard.css";
import { FaUsers } from "react-icons/fa6";
const Dashboard = () => {
  const userData = [
    {
      id: 122,
      user: "Uttam Patra",
      status: "Pending",
      className: "pending",
    },
    {
      id: 132,
      user: "Manotosh Maity",
      status: "Completed",
      className: "completed",
    },
    {
      id: 142,
      user: "Nirmal Mandal",
      status: "Completed",
      className: "completed",
    },
  ];

  const [dNone, setNone] = useState("none");
  const searchDisplay = () => {
    setNone("block");
  };

  const searchValue = () => {};

  let data = userData.map((x) => {
    return (
      <tr>
        <td>
          <p>{x.user}</p>
        </td>
        <td>
          <span className={`status ${x.className}`}>{x.status}</span>
        </td>
      </tr>
    );
  });
  // const searchValue = (e) => {
  //   let value = e.target.value;
  //   let searchValue = value.toUpperCase();
  //   console.log(searchValue);
  // };

  return (
    <>
      <div id="dashboard">
        <div className="content">
          <main>
            {/* <!-- Insights --> */}
            <ul className="insights">
              <li>
                <i className="bx bx-calendar-check"></i>
                <span className="info">
                  <h3>₹20,00</h3>
                  <p>Task Income</p>
                </span>
              </li>
              <li>
                <i className="bx bx-show-alt"></i>
                <span className="info">
                  <h3>₹100,00</h3>
                  <p>Referral Income</p>
                </span>
              </li>
              <li>
                <i className="bx bx-line-chart"></i>
                <span className="info">
                  <h3>04</h3>
                  <p>Referral</p>
                </span>
              </li>
              <li>
                <i className="bx bx-dollar-circle"></i>
                <span className="info">
                  <h3>₹600,00</h3>
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
