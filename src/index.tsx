import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import { DebugObserver } from "@hooks/useRecoilLogger";
import App from "./App";
import appConfig from "../app-config.json";

import "@helpers/initFA";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.min.css";
import "@assets/scss/user.scss";
import "../i18n-config";

declare const window: any;

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

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
