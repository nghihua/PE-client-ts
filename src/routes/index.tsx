import React from 'react';

import UserGuard from '../guards/UserGuard';
import AdminGuard from '../guards/AdminGuard';

import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />

        {/* user routes */}
        <Route path="/user/*" element={<UserGuard />}>
          <Route path="profile" element={<Profile />} />
          {/* add new user routes here */}
          <Route path="*" element={<Navigate to="profile" replace />} />
        </Route>

        {/* admin routes */}
        <Route path="/admin/*" element={<AdminGuard />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* add new admin routes here */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
