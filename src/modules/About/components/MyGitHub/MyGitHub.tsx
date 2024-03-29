import { Grid } from '@mui/joy';
import React from 'react';
import GitHub from '../../../../app/assets/gitHub.png';
import { Image } from '../../../../shared/ui/image/Image';
import { ItemCard } from '../../../../shared/ui/layout/ItemCard';
import { Title } from '../../../../shared/ui/typography/Title';

interface MyGitHubProps {
  link: string;
  label: string;
}

const MyGitHub: React.FC<MyGitHubProps> = ({ link, label }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <ItemCard>
        <Grid container justifyContent="center" padding={4} flexDirection="column" alignItems="center" gap={3}>
          <Image height={100} src={GitHub} />
          <Title variant="title">{label}</Title>
        </Grid>
      </ItemCard>
    </a>
  );
};

export default MyGitHub;
