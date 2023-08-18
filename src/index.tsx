declare const window: any;

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import appConfig from "../app-config.json";
import { RecoilRoot } from "recoil";
import RecoilLogger from "recoil-logger";

import '@helpers/initFA';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './assets/scss/theme.scss'
import "../i18n-config";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilLogger />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
