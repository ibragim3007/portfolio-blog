import React from 'react';
import { config } from '../../../router/routerConfig';
import LinkItem from './LinkItem';
import { Grid } from '@mui/joy';

const NavLinks = () => {
  return (
    <Grid container gap={2}>
      <LinkItem to={config.home}>Home</LinkItem>
      <LinkItem to={config.about}>About</LinkItem>
      <LinkItem to={config.admin}>Admin</LinkItem>
    </Grid>
  );
};

export default NavLinks;
