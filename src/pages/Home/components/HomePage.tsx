import React from 'react';

import Greetings from '../../../modules/greetings';
import AppWidth from '../../../shared/layout/AppWidth';
import Posts from '../../../modules/Posts';
import { Grid } from '@mui/joy';

const HomePage = () => {
  return (
    <AppWidth>
      <Grid container gap={3}>
        <Greetings />
        <Posts />
      </Grid>
    </AppWidth>
  );
};

export default HomePage;
