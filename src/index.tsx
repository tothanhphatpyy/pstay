import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
/* import Main from './Main'; */
import '@helpers/initFA';
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const container = (document.getElementById("app")!);
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Main> */}
      <App />
    {/* </Main> */}
  </React.StrictMode>
);

