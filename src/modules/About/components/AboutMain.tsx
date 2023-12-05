import { Grid } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import { Card } from '../../../shared/layout/Card';

const AboutMain = () => {
  return (
    <Grid>
      <Card>
        <Title variant="title">Welcome to my page!</Title>
      </Card>
    </Grid>
  );
};

export default AboutMain;
