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
import FoldersScreen from './MoreFrontInfo/FoldersScreen';
import ReduxToolkit from './Technologies/ReduxToolkit';
import { BACK_REPO_OF_THIS_PROJECT, FRONT_REPO_OF_THIS_PROJECT } from '../../../constants/LINKS';
import NodeJSTech from './Technologies/NodeJsTech';
import PrismaTech from './Technologies/PrismaTech';
import PostgreTech from './Technologies/PostgreTech';

const AboutMain = () => {
  return (
    <Grid>
      <Card>
        <Stack gap={10}>
          <Title variant="text">What technologies did this site use?</Title>
          <CardWrapper label="Frontend">
            <ReactTech />
            <Typescript />
            <MuiTech />
            <ApolloTech />
            <ReduxToolkit />
            <MyGitHub link={FRONT_REPO_OF_THIS_PROJECT} label="Frontend repository" />
          </CardWrapper>
          {/* <FoldersScreen /> */}
          <CardWrapper label="Backend">
            <NodeJSTech />
            <Typescript />
            <ApolloTech />
            <PrismaTech />
            <PostgreTech />
            <MyGitHub link={BACK_REPO_OF_THIS_PROJECT} label="Backend repository" />
          </CardWrapper>
        </Stack>
      </Card>
    </Grid>
  );
};

export default AboutMain;
