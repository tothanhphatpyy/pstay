import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SplitLogin from '@components/authentication/split/Login';
/* import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/components/dashboard/default'; */

const DigiBirdRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route> */}
      <Route path="/" element={<SplitLogin />} />
    </Routes>
  );
};

export default DigiBirdRoutes;
