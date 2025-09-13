
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LoginContextProvider from "../context/Logincontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <LoginContextProvider >
    <App />
    </LoginContextProvider>
  </BrowserRouter>
);
