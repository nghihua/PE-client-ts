// Used in routing to guard routes

// E.g: AuthGuard is used to prevent guests from visiting
// user-only routes

import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// api
import { authApi } from '../api/authApi.js';

// change children to string
const AuthGuard = (children: string) => {
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { message } = await authApi.checkAuth();
      return message.success;
    }

    fetchData().then((success) => {
      if (success) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [isAuth]);

  return isAuth === true ? (
    children
  ) : (
    <Navigate to={location.pathname} replace state={{ from: location }} />
  );
};

export default AuthGuard;
