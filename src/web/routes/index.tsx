import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import SplitLogin from '@components/authentication/split/Login';
import DashBoard from '@components/dashboard/default';

const DigiBirdRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
};

export default DigiBirdRoutes;
