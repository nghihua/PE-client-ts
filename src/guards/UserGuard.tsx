// UserGuard is used to prevent guests from visiting
// user-only routes

import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, RouteProps, Outlet } from 'react-router-dom';

// api
import { authApi } from '../api/authApi';

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

  // useEffect(() => {

  //   async function login() {
  //     const result = await authApi.login({
  //       email: 'huanhatgianghi@gmail.com',
  //       password: 'ahaha'
  //     });
  //     return result;
  //   }

  //   login().then((result) => {
  //     console.log(result);
  //   })

  // }, []);

  if (!isAuth) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return <Outlet />;
}
