// Used in routing to guard routes

// E.g: AuthGuard is used to prevent guests from visiting
// user-only routes

import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// api
import { authApi } from '../api/authApi.js';

export default function AuthGuard({ children }) {
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(null);

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

  if (isAuth === null) {
    return null;
  } else if (!isAuth) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
}
