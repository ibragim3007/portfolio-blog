import { Grid, Stack } from '@mui/joy';
import CardWrapper from '../../../components/Cards/CardWrapper';
import { BACK_REPO_OF_THIS_PROJECT, FRONT_REPO_OF_THIS_PROJECT } from '../../../shared/constants/LINKS';
import { Card } from '../../../shared/ui/layout/Card';
import { Title } from '../../../shared/ui/typography/Title';
import MyGitHub from './MyGitHub/MyGitHub';
import ApolloTech from './Technologies/ApolloTech';
import MuiTech from './Technologies/MuiTech';
import NodeJSTech from './Technologies/NodeJsTech';
import PostgreTech from './Technologies/PostgreTech';
import PrismaTech from './Technologies/PrismaTech';
import ReactTech from './Technologies/ReactTech';
import ReduxToolkit from './Technologies/ReduxToolkit';
import Typescript from './Technologies/Typescript';
import FoldersScreen from './MoreFrontInfo/FoldersScreen';

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
