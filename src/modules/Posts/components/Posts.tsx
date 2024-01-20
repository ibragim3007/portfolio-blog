import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/joy';
import { GET_PREVIEW_POSTS } from '../../../GraphQL/@post/getPreviewPosts';
import LoadingWrapper from '../../../components/Loading/LoadingWrapper';

import { PreviewCardInterface } from '../../../components/PreviewCard/graphql/interface/PreviewCardInterface';
import PreviewCard from '../../../components/PreviewCard/PreviewCard';
import MultipleSkeletonCards from '../../../components/PreviewCard/SkeletonCard/MultipleSkeletonCards';

const Posts = () => {
  const { data, loading } = useQuery<{ getAllPosts: PreviewCardInterface[] }>(GET_PREVIEW_POSTS);

  return (
    <Grid container gap={2}>
      <LoadingWrapper loading={loading} loadingNode={<MultipleSkeletonCards />}>
        {data?.getAllPosts.map(post => {
          return <PreviewCard post={post} key={post.id} />;
        })}
      </LoadingWrapper>
    </Grid>
  );
};

export default Posts;
