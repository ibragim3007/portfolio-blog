import { Grid } from '@mui/joy';
import React from 'react';
import GitHub from '../../../../assets/gitHub.png';
import { Image } from '../../../../shared/image/Image';
import { ItemCard } from '../../../../shared/layout/ItemCard';
import { Title } from '../../../../shared/typography/Title';
import { FRONT_REPO_OF_THIS_PROJECT } from '../../../../constants/LINKS';

const MyGitHub: React.FC = () => {
  return (
    <a href={FRONT_REPO_OF_THIS_PROJECT} target="_blank" rel="noreferrer">
      <ItemCard>
        <Grid container justifyContent="center" padding={4} flexDirection="column" alignItems="center" gap={3}>
          <Image height={100} src={GitHub} />
          <Title variant="title">Frontend repository</Title>
        </Grid>
      </ItemCard>
    </a>
  );
};

export default MyGitHub;
