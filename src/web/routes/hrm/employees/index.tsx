import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";
import Dashboard from "@components/dashboard/default";

const EmployeesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id" element={<SplitLogin />} />
      <Route path="/:id/edit" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default EmployeesLayout;
