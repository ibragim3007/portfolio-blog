import React from 'react';
import Login from '../../../modules/Login';
import AppWidth from '../../../shared/layout/AppWidth';
import Greetings from '../../../modules/greetings';

const AuthPage = () => {
  return (
    <AppWidth>
      <Login />
      <Greetings />
    </AppWidth>
  );
};

export default AuthPage;
