import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Grid } from '@mui/joy';

import { Card } from '../../../shared/layout/Card';

const TheHeader = () => {
  return (
    <Card style={{ marginBottom: 20 }} padding={'20px'}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: '0px 5%',
        }}
      >
        <Logo />
        <NavLinks />
      </Grid>
    </Card>
  );
};

export default TheHeader;
