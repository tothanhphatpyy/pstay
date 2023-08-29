import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SplitLogin from '@components/authentication/split/Login';
import Dashboard from '@components/dashboard/default';
import BottomNavigation from '@zalo/routes/BottomNavigation';
import Home from '@zalo/pages/tab/Home';
import MainLayout from '@layouts/MainLayout';

const ZaloRoutes = () => {
  return (
    <div className='bg-light dark__bg-1100 container'>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/notification" element={<SplitLogin />} />
      <Route path="/cart" element={<Dashboard />} />
      <Route path="/profile" element={<MainLayout />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
    <BottomNavigation />
    </div>
  );
};

export default ZaloRoutes;
