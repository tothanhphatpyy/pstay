import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CloseButton } from "@components/common/Toast";
import { ToastContainer, toast } from "react-toastify";
import ZaloRoutes from "./routes";

const ZaloRoot = () => {
  return (
    <BrowserRouter
      basename={
        process.env.NODE_ENV === "production" ? `/zapps/${window.APP_ID}` : ""
      }
    >
      <ZaloRoutes />
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </BrowserRouter>
  );
};

export default ZaloRoot;
