import React from "react";
import { createRoot } from "react-dom/client";

import "@helpers/initFA";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../i18n-config";

import App from "./App";
import appConfig from "../app-config.json";
import { RecoilRoot } from "recoil";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
