import React from 'react';
import { config } from '../../../app/router/routerConfig';
import LinkItem from './LinkItem';
import { Grid } from '@mui/joy';
import ClientProvider from '../../../shared/security/ClientProvider';
import { useAppSelector } from '../../../shared/hooks/redux/reduxHooks';

const NavLinks = () => {
  const { me } = useAppSelector((state) => state.meReducer);
  return (
    <Grid container gap={2}>
      <LinkItem to={config.feed}>Feed</LinkItem>
      <LinkItem to={config.about}>About</LinkItem>
      <ClientProvider role="USER" isShow>
        {me && <LinkItem to={`${config.user}/${me.id}`}>Me</LinkItem>}
      </ClientProvider>
      <ClientProvider isShow={false} unAuthorizaton>
        <LinkItem to={config.admin}>Admin</LinkItem>
      </ClientProvider>
    </Grid>
  );
};

export default NavLinks;
