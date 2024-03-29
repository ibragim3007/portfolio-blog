import React from 'react';
import Login from '../../../modules/Login';
import AppWidth from '../../../shared/ui/layout/AppWidth';
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
