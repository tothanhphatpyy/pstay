import Dashboard from "@components/dashboard/default";
import Placeholder from "@components/skeleton/SekeletonCard";
import MainLayout from "@layouts/MainLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default DashboardLayout;
