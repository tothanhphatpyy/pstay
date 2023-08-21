// PrivateRoute.tsx in v6
import React from 'react';
import { useAuthValue } from '@atom/auth';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let location = useLocation();
    const { tokenIsValid } = useAuthValue(); // check token validate
  
    if (!tokenIsValid) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  
    return <Outlet />;
  };
  
export default PrivateRoute;