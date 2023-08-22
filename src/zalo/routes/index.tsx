import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SplitLogin from '@components/authentication/split/Login';
import DashboardLayout from '@web/routes/dashboard';
import MainLayout from '@layouts/MainLayout';

const ZaloRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={<DashboardLayout />} />
        <Route path="/login" element={<SplitLogin />} />
      </Route>
    </Routes>
  );
};

export default ZaloRoutes;
