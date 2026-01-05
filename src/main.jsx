import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import AuthProvider from "./provider/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </AuthProvider>
  </StrictMode>
);
