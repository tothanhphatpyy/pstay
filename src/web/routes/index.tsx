import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import SplitLogin from '@components/authentication/split/Login';
import DashBoard from '@components/dashboard/default';
import MainLayout from '@layouts/MainLayout';

const DigiBirdRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default DigiBirdRoutes;
