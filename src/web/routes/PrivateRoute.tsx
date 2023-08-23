// PrivateRoute.tsx in v6
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@atom/auth/useAuth';

const PrivateRoute = () => {
    let location = useLocation();
    const { auth } = useAuth(); // check token validate
  
    if (!auth.tokenIsValid) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  
    return <Outlet />;
  };
  
export default PrivateRoute;