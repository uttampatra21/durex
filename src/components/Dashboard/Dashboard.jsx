import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div class="content">
        <main>
          {/* <!-- Insights --> */}
          <ul class="insights">
            <li>
              <i class="bx bx-calendar-check"></i>
              <span class="info">
                <h3>1,074</h3>
                <p>Paid Order</p>
              </span>
            </li>
            <li>
              <i class="bx bx-show-alt"></i>
              <span class="info">
                <h3>3,944</h3>
                <p>Site Visit</p>
              </span>
            </li>
            <li>
              <i class="bx bx-line-chart"></i>
              <span class="info">
                <h3>14,721</h3>
                <p>Searches</p>
              </span>
            </li>
            <li>
              <i class="bx bx-dollar-circle"></i>
              <span class="info">
                <h3>$6,742</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>
          {/* <!-- End of Insights --> */}

          <div class="bottom-data">
            <div class="orders">
              <div class="header">
                <i class="bx bx-receipt"></i>
                <h3>Recent Orders</h3>
                <i class="bx bx-filter"></i>
                <i class="bx bx-search"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Order Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="images/profile-1.jpg" />
                      <p>John Doe</p>
                    </td>
                    <td>14-08-2023</td>
                    <td>
                      <span class="status completed">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="images/profile-1.jpg" />
                      <p>John Doe</p>
                    </td>
                    <td>14-08-2023</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="images/profile-1.jpg" />
                      <p>John Doe</p>
                    </td>
                    <td>14-08-2023</td>
                    <td>
                      <span class="status process">Processing</span>
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
                    <p>Start Our Meeting</p>
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
                <li class="not-completed">
                  <div class="task-title">
                    <i class="bx bx-x-circle"></i>
                    <p>Play Footbal</p>
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
  );
};

export default Dashboard;
