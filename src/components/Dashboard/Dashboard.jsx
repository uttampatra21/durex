import React from "react";
import "./Dashboard.css";
import { FaUsers } from "react-icons/fa6";
const Dashboard = () => {
  return (
    <>
      <div id="dashboard">
        <div class="content">
          <main>
            {/* <!-- Insights --> */}
            <ul class="insights">
              <li>
                <i class="bx bx-calendar-check"></i>
                <span class="info">
                  <h3>₹20,00</h3>
                  <p>Task Income</p>
                </span>
              </li>
              <li>
                <i class="bx bx-show-alt"></i>
                <span class="info">
                  <h3>₹100,00</h3>
                  <p>Referral Income</p>
                </span>
              </li>
              <li>
                <i class="bx bx-line-chart"></i>
                <span class="info">
                  <h3>04</h3>
                  <p>Referral</p>
                </span>
              </li>
              <li>
                <i class="bx bx-dollar-circle"></i>
                <span class="info">
                  <h3>₹600,00</h3>
                  <p>Total Income</p>
                </span>
              </li>
            </ul>
            {/* <!-- End of Insights --> */}

            <div class="bottom-data">
              <div class="orders">
                <div class="header">
                <FaUsers />
                  <h3>Refferal User</h3>
                  <i class="bx bx-search"></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Join Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>Manomosh Maity</p>
                      </td>
                      <td>10-03-2023</td>
                      <td>
                        <span class="status pending">Pending</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>Uttam Patra</p>
                      </td>
                      <td>19-09-2023</td>
                      <td>
                        <span class="status completed">Completed</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>Nirmal Mandal</p>
                      </td>
                      <td>25-07-2023</td>
                      <td>
                        <span class="status completed">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Reminders --> */}
              <div class="reminders">
                <div class="header">
                  <i class="bx bx-note"></i>
                  <h3>Remiders</h3>
                  <i class="bx bx-filter"></i>
                  <i class="bx bx-plus"></i>
                </div>
                <ul class="task-list">
                  <li class="completed">
                    <div class="task-title">
                      <i class="bx bx-check-circle"></i>
                      <p>Complete Your Task</p>
                    </div>
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </li>
                  <li class="completed">
                    <div class="task-title">
                      <i class="bx bx-check-circle"></i>
                      <p>Analyse Our Site</p>
                    </div>
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </li>
                </ul>
              </div>

              {/* <!-- End of Reminders--> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
