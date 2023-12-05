import { Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../shared/typography/Title';
import Avatar from '../Avatar/Avatar';

interface HeaderCardProps {
  title: string;
  createDate: Date;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ title, createDate }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
        <Title variant="title">{title}</Title>
      </Grid>
      <Grid>
        <Title variant="subtitle">{createDate.toString()}</Title>
      </Grid>
    </Grid>
  );
};
