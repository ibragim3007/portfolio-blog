import { Grid, Stack } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import { Card } from '../../../shared/layout/Card';
import ReactTech from './Technologies/ReactTech';
import Typescript from './Technologies/Typescript';
import MuiTech from './Technologies/MuiTech';
import ApolloTech from './Technologies/ApolloTech';

const AboutMain = () => {
  return (
    <Grid>
      <Card>
        <Stack gap={3}>
          <Title variant="text">What technologies did this site use?</Title>
          <Title variant="title">Frontend</Title>
          <Grid container gap={3}>
            <ReactTech />
            <Typescript />
            <MuiTech />
            <ApolloTech />
          </Grid>
        </Stack>
      </Card>
    </Grid>
  );
};

export default AboutMain;
