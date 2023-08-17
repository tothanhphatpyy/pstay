import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SplitLogin from '@components/authentication/split/Login';

const ZaloRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplitLogin />} />
    </Routes>
  );
};

export default ZaloRoutes;
