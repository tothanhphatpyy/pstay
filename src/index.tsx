import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import appConfig from "../app-config.json";
import { RecoilRoot } from "recoil";
import { DebugObserver } from "./logger";

import "@helpers/initFA";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.min.css";
/* import "./assets/scss/theme.scss"; */
import "../i18n-config";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

declare const window: any;

// Mount React App
const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      {process.env.NODE_ENV !== "production" && (
        <DebugObserver type="object" /> // print type:  (Default) "object" | "string"
      )}
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
