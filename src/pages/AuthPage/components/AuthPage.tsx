import React from 'react';
import Login from '../../../modules/Login';
import AppWidth from '../../../shared/layout/AppWidth';
import Greetings from '../../../modules/greetings';
import SignUpButton from '../../../modules/SignUp';

const AuthPage = () => {
  return (
    <AppWidth>
      <Login />
      <Greetings />
    </AppWidth>
  );
};

export default AuthPage;
