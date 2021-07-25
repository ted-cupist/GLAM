import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
      rel="stylesheet"
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
