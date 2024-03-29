import React from 'react';
import AppWidth from '../../../shared/ui/layout/AppWidth';
import SignUpForms from '../../../modules/SignUpForms';

const SignUpPage = () => {
  return (
    <AppWidth width={600}>
      <SignUpForms />
    </AppWidth>
  );
};

export default SignUpPage;
