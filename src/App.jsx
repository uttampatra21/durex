import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wallet from "./components/Wallet/Wallet";
import Task from "./components/Task/Task";
import Refferal from "./components/Refferal/Refferal";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RWithdraw from "./components/RWithdraw/RWithdraw";
import TWithdraw from "./components/TWithdraw/TWithdraw";
import Payment from "./components/Payment Us/Payment";
function App() {
  return (
    <>
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
              <Signup />
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
      </Routes>
    </>
  );
}

export default App;
