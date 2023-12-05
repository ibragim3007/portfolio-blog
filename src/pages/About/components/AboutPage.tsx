import React from 'react';
import AboutMain from '../../../modules/About';
import Greetings from '../../../modules/greetings';
import AppWidth from '../../../shared/layout/AppWidth';

const AboutPage = () => {
  return (
    <AppWidth>
      <Greetings />
      <AboutMain />
    </AppWidth>
  );
};

export default AboutPage;
