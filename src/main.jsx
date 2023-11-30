import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import corporxStore from "./redux/store.js";
import { HashRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={corporxStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
