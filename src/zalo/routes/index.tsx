import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SplitLogin from '@components/authentication/split/Login';
import Dashboard from '@components/dashboard/default';
import BottomNavigation from '@zalo/routes/BottomNavigation';
import Home from '@zalo/pages/tab/Home';
import MainLayout from '@layouts/MainLayout';
import Profile from '@zalo/pages/tab/Profile';
import Products from '@zalo/pages/components/products';
import Categories from '@zalo/pages/components/categories';

const ZaloRoutes = () => {
  return (
    <div className='bg-light dark__bg-1100 container-app'>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/favorite" element={<SplitLogin />} />
      <Route path="/order" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/components/products" element={<Products />} />
      <Route path="/components/categories" element={<Categories />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
    <BottomNavigation />
    </div>
  );
};

export default ZaloRoutes;
