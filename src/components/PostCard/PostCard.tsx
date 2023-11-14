import React from 'react';
import { Card } from '../../shared/layout/Card';
import { HeaderCard } from './HeaderCard';
import ContentCard from './ContentCard';
import LikeButton from '../LikeButton/LikeButton';
import { Grid } from '@mui/joy';

const PostCard = () => {
  return (
    <Card>
      <HeaderCard />
      <ContentCard />
      <Grid container justifyContent="flex-end">
        <LikeButton />
      </Grid>
    </Card>
  );
};

export default PostCard;
