// NPM Packages
import React from "react";
import ReactDOM from "react-dom";
import { logEvent } from "@firebase/analytics";

// Project files
import { analytics } from "scripts/firebase";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

logEvent(analytics, "notification_received");
