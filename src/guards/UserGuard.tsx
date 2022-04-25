// UserGuard is used to prevent guests from visiting
// user-only routes

import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  RouteProps,
  Router,
  Outlet,
} from 'react-router-dom';

// api
import { authApi } from '../api/authApi.js';

export default function UserGuard({ ...routeProps }: RouteProps) {
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { message } = await authApi.checkAuth();
  //     return message;
  //   }

  //   fetchData().then((message) => {
  //     if (message.success && message.details.role==='user') {
  //       setIsAuth(true);
  //     } else {
  //       setIsAuth(false);
  //     }
  //   });
  // }, [isAuth]);

  if (!isAuth) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return <Outlet />;
}
