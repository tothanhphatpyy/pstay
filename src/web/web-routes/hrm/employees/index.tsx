import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SplitLogin from "@components/authentication/split/Login";
import Dashboard from "@components/dashboard/default";
import EmployeeProfile from "@web/web-pages/hrm/employees/EmployeeProfile";

const EmployeesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<SplitLogin />} />
      <Route path="/:id" element={<EmployeeProfile />} />
      <Route path="/:id/edit" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default EmployeesLayout;
