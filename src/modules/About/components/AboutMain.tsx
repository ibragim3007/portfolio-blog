import { Grid, Stack } from '@mui/joy';
import React from 'react';
import { Title } from '../../../shared/typography/Title';
import { Card } from '../../../shared/layout/Card';
import ReactTech from './Technologies/ReactTech';
import Typescript from './Technologies/Typescript';
import MuiTech from './Technologies/MuiTech';
import ApolloTech from './Technologies/ApolloTech';
import CardWrapper from '../../../components/Cards/CardWrapper';
import MyGitHub from './MyGitHub/MyGitHub';

const AboutMain = () => {
  return (
    <Grid>
      <Card>
        <Stack gap={5}>
          <Title variant="text">What technologies did this site use?</Title>
          <CardWrapper label="Frontend">
            <ReactTech />
            <Typescript />
            <MuiTech />
            <ApolloTech />
            <MyGitHub />
          </CardWrapper>
        </Stack>
      </Card>
    </Grid>
  );
};

export default AboutMain;
