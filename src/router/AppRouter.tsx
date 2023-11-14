import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { config } from './routerConfig';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';

const AppRoter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.home} element={<HomePage />} />
        <Route path={config.about} element={<AboutPage />} />
        <Route path="*" element={<Navigate to={config.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoter;
