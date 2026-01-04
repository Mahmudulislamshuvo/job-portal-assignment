import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "@reduxjs/toolkit/query/react";
import { store } from "./features/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
