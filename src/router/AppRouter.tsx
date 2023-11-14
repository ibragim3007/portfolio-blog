import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { config } from './routerConfig';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import TheHeader from '../modules/header';
import { WrapperApp } from '../shared/layout/WrapperApp';
import AuthPage from '../pages/AuthPage';

const AppRoter: React.FC = () => {
  return (
    <WrapperApp>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path={config.home} element={<HomePage />} />
          <Route path={config.about} element={<AboutPage />} />
          <Route path={config.admin} element={<AuthPage />} />
          <Route path="*" element={<Navigate to={config.home} />} />
        </Routes>
      </BrowserRouter>
    </WrapperApp>
  );
};

export default AppRoter;
