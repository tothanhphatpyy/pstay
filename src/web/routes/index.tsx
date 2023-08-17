import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplitLogin from '@components/authentication/split/Login';

const DigiBirdRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplitLogin />} />
    </Routes>
  );
};

export default DigiBirdRoutes;
