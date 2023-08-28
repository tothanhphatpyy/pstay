import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SplitLogin from '@components/authentication/split/Login';
import Dashboard from '@components/dashboard/default';
import BottomNavigation from '@zalo/zalo-routes/BottomNavigation';

const ZaloRoutes = () => {
  return (
    <div className='container'>
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/notification" element={<SplitLogin />} />
      <Route path="/cart" element={<Dashboard />} />
      <Route path="/profile" element={<SplitLogin />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
    <BottomNavigation />
    </div>
  );
};

export default ZaloRoutes;
