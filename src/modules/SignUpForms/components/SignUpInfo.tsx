import React from 'react';
import { Title } from '../../../shared/ui/typography/Title';
import { Grid } from '@mui/joy';

const SignUpInfo = () => {
  return (
    <Grid>
      <Title style={{ margin: 0 }} variant="title">
        Welcome!
      </Title>
      <Title variant="text">Type your full name to continue</Title>
    </Grid>
  );
};

export default SignUpInfo;
