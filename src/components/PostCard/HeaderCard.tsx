import { Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../shared/typography/Title';
import Avatar from '../Avatar/Avatar';

export const HeaderCard = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
        <Title variant="title">Hello</Title>
      </Grid>
      <Grid>
        <Title variant="subtitle">12 may 2023</Title>
      </Grid>
    </Grid>
  );
};
