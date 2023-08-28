// Node modules
import React from "react";
import ReactDOM from "react-dom";
import { logEvent } from "@firebase/analytics";

// Project files
import { analytics } from "scripts/firebase";
import App from "./App";
import { ModalProvider } from "state/ModalProvider";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider initialState={null}>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

logEvent(analytics, "notification_received");
