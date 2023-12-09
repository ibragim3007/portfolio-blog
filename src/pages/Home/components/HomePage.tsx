import React from 'react';

import Greetings from '../../../modules/greetings';
import AppWidth from '../../../shared/layout/AppWidth';
import Posts from '../../../modules/Posts';
import { Grid } from '@mui/joy';
import SignUpButton from '../../../modules/SignUp';
import ClientProvider from '../../../security/ClientProvider';

import AddNewPost from '../../../modules/AddPostForm';

const HomePage: React.FC = () => {
  return (
    <AppWidth>
      <Grid container gap={3}>
        <SignUpButton />
        <Greetings />
        <ClientProvider role={'ADMIN'}>
          <AddNewPost />
        </ClientProvider>
        <Posts />
      </Grid>
    </AppWidth>
  );
};

export default HomePage;
