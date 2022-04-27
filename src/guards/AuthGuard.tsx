import React, { useState, useEffect } from 'react';
import { authApi } from '../api/authApi';
import { Navigate, useLocation, RouteProps, Outlet } from 'react-router-dom';

const AdminGuard = ({ ...routeProps }: RouteProps) => {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const role = await authApi.validateRole();
      return role;
    }

    fetchData().then((message) => {
      if (message === 1) {
        setIsAuth(true);
      }
    });
  }, [isAuth]);

  if (!isAuth) {
    console.log('not auth');
    return <Navigate to={{ pathname: '/' }} />;
  }

  return <Outlet />;
};

export default AdminGuard;
