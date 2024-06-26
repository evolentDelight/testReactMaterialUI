import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import Dashboard from "./pages/Dashboard"
//import reportWebVitals from './reportWebVitals';
import MainNavBar from "./components/mainNavBar/mainNavBar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainNavBar />
  </React.StrictMode>
);

/*
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
