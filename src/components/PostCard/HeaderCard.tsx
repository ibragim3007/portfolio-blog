import { Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../shared/typography/Title';
import Avatar from '../Avatar/Avatar';

export const HeaderCard = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <Avatar url="https://lh3.googleusercontent.com/a/ACg8ocLkE0L8hRRdQ07H5nm3TWw_05-Pd5d0rgt-surq7vRE0po=s576-c-no" />
        <Title variant="title">Hello</Title>
      </Grid>
      <Grid>
        <Title variant="subtitle">12 may 2023</Title>
      </Grid>
    </Grid>
  );
};
