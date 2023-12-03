import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wallet from "./components/Wallet/Wallet";
import Task from "./components/Task/Task";
import Login from "./components/Login/Login";
import RWithdraw from "./components/RWithdraw/RWithdraw";
import TWithdraw from "./components/TWithdraw/TWithdraw";
import Payment from "./components/Payment Us/Payment";
import Activation from "./components/Activation/Activation";
import Service from "./components/Service/Service";
import Store from "./components/Store/Store";
function App() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "20px",
          zIndex: "999",
        }}
      >
        <a href="https://wa.me/8371934028">
          <img
            width="70px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            alt=""
          />
        </a>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Dashboard />
              <Footer />
            </>
          }
        />

        <Route
          path="/task"
          element={
            <>
              <Header />
              <Task />
              <Footer />
            </>
          }
        />

        <Route
          path="/wallet"
          element={
            <>
              <Header />
              <Wallet />
              <Footer />
            </>
          }
        />

        <Route
          path="/rWithdraw"
          element={
            <>
              <Header />
              <RWithdraw />
              <Footer />
            </>
          }
        />

        <Route
          path="/tWithdraw"
          element={
            <>
              <Header />
              <TWithdraw />
              <Footer />
            </>
          }
        />

        <Route
          path="/refferal"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
            </>
          }
        />

        <Route
          path="services"
          element={
            <>
              <Header />
              <Service />
              <Footer />
            </>
          }
        />

        <Route
          path="/activation"
          element={
            <>
              <Header />
              <Activation />
              <Footer />
            </>
          }
        />

        <Route
          path="/store"
          element={
            <>
              <Store />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
