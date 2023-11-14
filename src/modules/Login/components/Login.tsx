import { Button, Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import Inputs from './Inputs/Inputs';
import { Card } from '../../../shared/layout/Card';

const Login = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title>Login to blog</Title>
      <Grid container gap={3} style={{ maxWidth: 250 }}>
        <Inputs />
        <Grid container justifyContent="space-between" style={{ width: '100%' }}>
          <Button variant="plain">Sign Up</Button>
          <Button>Login</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Login;
