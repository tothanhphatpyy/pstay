import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";

const HRMLayout = () => {
  return (
    <Routes>
      <Route path="employees" element={<SplitLogin />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default HRMLayout;
