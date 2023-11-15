import React from 'react';

import Greetings from '../../../modules/greetings';
import AppWidth from '../../../shared/layout/AppWidth';
import Posts from '../../../modules/Posts';
import { Grid } from '@mui/joy';
import SignUpButton from '../../../modules/SignUp';

const HomePage = () => {
  return (
    <AppWidth>
      <Grid container gap={3}>
        <SignUpButton />
        <Greetings />
        <Posts />
      </Grid>
    </AppWidth>
  );
};

export default HomePage;
