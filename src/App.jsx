import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import Wallet from "./components/Wallet/Wallet";
import Task from "./components/Task/Task";
import Refferal from "./components/Refferal/Refferal";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RWithdraw from "./components/RWithdraw/RWithdraw";
function App() {
  return (
    <BrowserRouter>
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
          path="/admin"
          element={
            <>
              <Admin />
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
            </>
          }
        />
        <Route
          path="/tWithdraw"
          element={
            <>
              <Header />
            </>
          }
        />

        <Route
          path="/refferal"
          element={
            <>
              <Header />
              <Refferal />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
