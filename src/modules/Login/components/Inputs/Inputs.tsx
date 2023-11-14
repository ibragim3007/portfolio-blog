import { Grid } from '@mui/joy';
import React from 'react';
import { Input } from '../../../../shared/inputs/Input';

const Inputs = () => {
  return (
    <Grid container gap={3}>
      <Input placeholder="Login" />
      <Input placeholder="Password" type="password" />
    </Grid>
  );
};

export default Inputs;
