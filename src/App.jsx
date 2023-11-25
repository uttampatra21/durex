import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import Wallet from "./components/Wallet/Wallet";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
        ----------HOME
        */}
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
        {/* 
        ----------ADMIN
        */}
        <Route
          path="admin"
          element={
            <>
              <Admin />
            </>
          }
        />

        {/* 
        ----------DASHBOARD
        */}
        <Route
          path="dashboard"
          element={
            <>
              <Header />
              <Dashboard />
              <Footer />
            </>
          }
        />

        {/* 
        ------------ WALLET
        */}
        <Route
          path="wallet"
          element={
            <>
              <Header />
              <Wallet />
              <Footer/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
