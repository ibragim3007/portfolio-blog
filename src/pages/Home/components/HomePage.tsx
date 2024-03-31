import React from 'react';

import Posts from '../../../modules/Posts';
import ClientProvider from '../../../shared/security/ClientProvider';
import AppWidth from '../../../shared/ui/layout/AppWidth';

import AddNewPost from '../../../modules/AddPostForm';
import { Grid } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <AppWidth>
      <Grid container gap={3}>
        {/* <SignUpButton /> */}
        {/* <Greetings /> */}
        <ClientProvider role={'ADMIN'}>
          <AddNewPost />
        </ClientProvider>
        <Posts />
      </Grid>
    </AppWidth>
  );
};

export default HomePage;
