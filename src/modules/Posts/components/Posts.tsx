import React from 'react';
import PostCard from '../../../components/PostCard/PostCard';
import { Grid } from '@mui/joy';

const Posts = () => {
  return (
    <Grid container gap={2}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Grid>
  );
};

export default Posts;
