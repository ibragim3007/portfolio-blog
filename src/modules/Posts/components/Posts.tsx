import React from 'react';
import PostCard from '../../../components/PostCard/PostCard';
import { Grid } from '@mui/joy';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../../../GraphQL/@post/getAllPosts';
import { PostResponseInterface } from '../../../GraphQL/@post/interfaces/PostResponseInterface';
import LoadingWrapper from '../../../components/Loading/LoadingWrapper';

const Posts = () => {
  const { data, loading } = useQuery<{ getAllPosts: PostResponseInterface[] }>(GET_ALL_POSTS);

  return (
    <Grid container gap={2}>
      <LoadingWrapper loading={loading}>
        {data?.getAllPosts.map(post => {
          return <PostCard post={post} key={post.id} />;
        })}
      </LoadingWrapper>
    </Grid>
  );
};

export default Posts;
