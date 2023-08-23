import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";
import Dashboard from "@components/dashboard/default";
import MainLayout from "@layouts/MainLayout";

const HRMLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="employees" element={<SplitLogin />} />
        <Route path="leaves" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default HRMLayout;
