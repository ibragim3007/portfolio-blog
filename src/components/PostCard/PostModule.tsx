import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useLazyQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../../shared/graphQL/@post/postById';
import { PostResponseInterface } from '../../shared/graphQL/@post/interface/PostResponseInterface';
import { useParams } from 'react-router-dom';
import { Title } from '../../shared/ui/typography/Title';
import LoadingCircle from '../Loading/LoadingCircle';
import { useAppSelector } from '../../shared/hooks/redux/reduxHooks';
import Comment from '../Comment';
import { Grid } from '@mui/joy';

const PostModule = () => {
  const { me } = useAppSelector((state) => state.meReducer);
  const { postId } = useParams();

  console.log(postId);
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
    <>
      <PostCard isMyPost={isMyPost} post={data.getPostById} />
      <Grid gap={1} container flexDirection="column" style={{ marginTop: '2em' }}>
        <Title variant="title" style={{ margin: 10 }}>
          Comments
        </Title>
        {data.getPostById.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Grid>
    </>
  );
};

export default PostModule;
