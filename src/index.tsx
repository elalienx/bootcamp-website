// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import { analytics } from "scripts/firebase";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

console.log("Google Analytics enabled", analytics);
