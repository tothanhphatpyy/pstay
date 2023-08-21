import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";
import DashboardLayout from "./dashboard";
import PrivateRoute from "./PrivateRoute";
import HRMLayout from "./hrm";
import MainLayout from "@layouts/MainLayout";

const DigiBirdRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
      <Route element={<MainLayout />}>
        <Route path="*" element={<DashboardLayout />} />
        <Route path="/hrm/*" element={<HRMLayout />} />
      </Route>
      </Route>
      <Route path="/login" element={<SplitLogin />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default DigiBirdRoutes;
