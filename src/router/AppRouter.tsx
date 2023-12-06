import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MeInterface } from '../GraphQL/@client/interfaces/meInterface';
import { ME } from '../GraphQL/@client/me';
import { useAppDispatch } from '../hooks/redux/reduxHooks';
import TheHeader from '../modules/header';
import AboutPage from '../pages/About';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/Home';
import SignUpPage from '../pages/SignUp/components/SignUpPage';
import { WrapperApp } from '../shared/layout/WrapperApp';
import { setMeAction } from '../store/me/actions/setMeAction';
import { config } from './routerConfig';

const AppRoter: React.FC = () => {
  const { data, loading } = useQuery<{ me: MeInterface }>(ME);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (data?.me && !loading) {
      dispath(setMeAction(data.me));
    }
  }, [loading, data, dispath]);

  return (
    <WrapperApp>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path={config.home} element={<HomePage />} />
          <Route path={config.about} element={<AboutPage />} />
          <Route path={config.admin} element={<AuthPage />} />
          <Route path={config.signup} element={<SignUpPage />} />
          <Route path="*" element={<Navigate to={config.home} />} />
        </Routes>
      </BrowserRouter>
    </WrapperApp>
  );
};

export default AppRoter;
