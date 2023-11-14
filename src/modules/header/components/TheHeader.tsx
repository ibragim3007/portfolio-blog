import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Grid } from '@mui/joy';

const TheHeader = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{
        backgroundColor: '#e2e2e2',
        padding: '0px 50px',

        borderBottom: '1px solid #a0a0a0',
      }}
    >
      <Logo />
      <NavLinks />
    </Grid>
  );
};

export default TheHeader;
