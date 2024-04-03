import { useLazyQuery } from '@apollo/client';
import { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostResponseInterface } from '../../shared/graphQL/@post/interface/PostResponseInterface';
import { GET_POST_BY_ID } from '../../shared/graphQL/@post/postById';
import { useAppSelector } from '../../shared/hooks/redux/reduxHooks';
import { Title } from '../../shared/ui/typography/Title';
import LoadingCircle from '../Loading/LoadingCircle';
import PostCard from './PostCard';

import LazyComments from '@/modules/Comments';

import FormAddComments from '@/modules/Comments/components/FormAddComments/FormAddComments';
import { Grid } from '@mui/material';

const PostModule = () => {
  const { me } = useAppSelector((state) => state.meReducer);
  const { postId } = useParams();

  const [getPostById, { data, loading, error }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID);

  useEffect(() => {
    if (postId)
      void getPostById({
        variables: {
          data: {
            id: postId,
          },
        },
      });
  }, [getPostById, postId]);

  if (loading) return <LoadingCircle />;
  if (!data) return <Title>No data</Title>;
  if (error) return <Title>{error.message}</Title>;

  const isMyPost = me?.id === data?.getPostById.author.id;
  return (
    <Grid container>
      <PostCard isMyPost={isMyPost} post={data.getPostById} />
      <Grid gap={1} container flexDirection="column" style={{ marginTop: '2em' }}>
        <Suspense fallback="loading...">
          <FormAddComments postId={data.getPostById.id} />
          <LazyComments comments={data.getPostById.comments} />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default PostModule;
