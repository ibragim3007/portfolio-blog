import { Button, Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import Inputs from './Inputs/Inputs';
import { Card } from '../../../shared/layout/Card';
import SignUpButton from '../../SignUp';

const Login = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Grid gap={10} container>
        <Grid container gap={3} style={{ maxWidth: 250 }}>
          <Title variant="title">Login to blog</Title>
          <Inputs />
          <Grid container justifyContent="space-between" style={{ width: '100%' }}>
            <Button variant="plain">Forgot password</Button>
            <Button>Login</Button>
          </Grid>
        </Grid>
        <SignUpButton />
      </Grid>
    </Card>
  );
};

export default Login;
