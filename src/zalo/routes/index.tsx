import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '@components/dashboard/default';
import BottomNavigation from '@zalo/routes/BottomNavigation';
import Home from '@zalo/pages/tab/Home';
import MainLayout from '@layouts/MainLayout';
import Profile from '@zalo/pages/tab/Profile';
import Products from '@zalo/pages/components/products';
import Categories from '@zalo/pages/components/categories';
import Sliders from '@zalo/pages/components/sliders';
import Demo from '@layouts/demo/Demo';
import { useUser } from '@atom/user/useUser';

const ZaloRoutes = () => {

  const { authUser } = useUser();
  useEffect(() => {
    authUser();
  },[])
  
  return (
    <div className='bg-light dark__bg-1100 container-app'>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/favorite" element={<Dashboard />} />
      <Route path="/order" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/components/products/:productLayout" element={<Products />} />
      <Route path="/components/categories/:categoryLayout" element={<Categories />} />
      <Route path="/components/sliders/:sliderLayout" element={<Sliders />} />

      <Route path="/demo-form" element={<Demo />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
    <BottomNavigation />
    </div>
  );
};

export default ZaloRoutes;
