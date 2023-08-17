import React from "react";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/index";
// import { CloseButton } from "components/common/Toast";
// import SettingsToggle from "components/settings-panel/SettingsToggle";
// import SettingsPanel from "components/settings-panel/SettingsPanel";
// import { ToastContainer, toast } from "react-toastify";

const WebRoot = () => {
  return (
    <BrowserRouter>
      <WebRoutes />
      {/* <SettingsToggle /> */}
      {/* <SettingsPanel /> */}
      {/* <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      /> */}
    </BrowserRouter>
  );
};

export default WebRoot;
