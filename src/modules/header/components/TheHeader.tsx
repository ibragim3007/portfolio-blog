import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Button, Grid } from '@mui/joy';

import { Card } from '../../../shared/layout/Card';
import { useAppDispatch } from '../../../hooks/redux/reduxHooks';
import { logoutAction } from '../../../store/me/actions/logoutAction';
import ClientProvider from '../../../security/ClientProvider';
import { Role } from '../../../GraphQL/@client/interfaces/meInterface';

const TheHeader = () => {
  const dispath = useAppDispatch();

  const clickLogOut = () => {
    dispath(logoutAction());
  };

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
        <Grid container gap={3} alignItems="center">
          <NavLinks />
          <ClientProvider role={'USER'}>
            <Button onClick={clickLogOut}>Exit</Button>
          </ClientProvider>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TheHeader;
