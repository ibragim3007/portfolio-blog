import React from 'react';
import { config } from '../../../router/routerConfig';
import LinkItem from './LinkItem';
import { Grid } from '@mui/joy';
import ClientProvider from '../../../security/ClientProvider';

const NavLinks = () => {
  return (
    <Grid container gap={2}>
      <LinkItem to={config.feed}>Feed</LinkItem>
      <LinkItem to={config.about}>About</LinkItem>
      <ClientProvider isShow={false} unAuthorizaton>
        <LinkItem to={config.admin}>Admin</LinkItem>
      </ClientProvider>
    </Grid>
  );
};

export default NavLinks;
