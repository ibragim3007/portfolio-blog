import React from 'react';

import Posts from '../../../modules/Posts';
import AppWidth from '../../../shared/ui/layout/AppWidth';

import { Grid } from '@mui/material';
import AddNewPost from '../../../modules/AddPostForm';

const HomePage: React.FC = () => {
  return (
    <AppWidth>
      <Grid container gap={3}>
        {/* <SignUpButton /> */}
        {/* <Greetings /> */}

        <AddNewPost />

        <Posts />
      </Grid>
    </AppWidth>
  );
};

export default HomePage;
