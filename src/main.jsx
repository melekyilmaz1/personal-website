import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);