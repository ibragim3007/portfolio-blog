import { Grid } from '@mui/joy';
import React from 'react';
import { Image } from '../../../../shared/ui/image/Image';
import Folders from '../../../../assets/Folders.png';
import { Title } from '../../../../shared/ui/typography/Title';

const FoldersScreen = () => {
  return (
    <Grid container gap={3} flexDirection="column" alignItems="center">
      <Title variant="title">Great FSD frontend architecture</Title>
      <Image height={340} src={Folders} />
    </Grid>
  );
};

export default FoldersScreen;
