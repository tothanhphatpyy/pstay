import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplitLogin from '@components/authentication/split/Login';
import DashboardLayout from './dashboard';

const DigiBirdRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/login" element={<SplitLogin />} />
    </Routes>
  );
};

export default DigiBirdRoutes;
