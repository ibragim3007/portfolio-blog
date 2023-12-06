import { useLazyQuery, useMutation } from '@apollo/client';
import { Grid, Stack } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { useAppSelector } from '../../hooks/redux/reduxHooks';
import { Card } from '../../shared/layout/Card';
import LikeButton from '../LikeButton/LikeButton';
import ContentCard from './ContentCard';
import { HeaderCard } from './HeaderCard';
import { RateReqInterface } from './graphql/interface/rateReqInterface';
import { RATE_POST } from './graphql/ratePost';
import { GET_POST_BY_ID } from '../../GraphQL/@post/postById';

interface PostCardProps {
  post: PostResponseInterface;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const me = useAppSelector(state => state.meReducer.me);
  const [rate, { loading }] = useMutation<{ ratePost: boolean }, { data: RateReqInterface }>(RATE_POST);
  const [getUpdatedPost, { data: udpatePostData, loading: loadingUpdatedPost }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID, {
    fetchPolicy: 'no-cache',
  });

  const [localPost, setLocalPost] = useState(post);

  const [lightUp, setLightUp] = useState(me ? localPost.likedBy.some(post => post.userId === me.id) : false);

  const clickRateButton = async () => {
    await rate({
      variables: {
        data: {
          postId: localPost.id,
        },
      },
    });

    const updatePost = await getUpdatedPost({
      variables: {
        data: {
          id: post.id,
        },
      },
    });

    if (updatePost.data?.getPostById)
      setLightUp(me ? updatePost.data?.getPostById.likedBy.some(post => post.userId === me.id) : false);
  };

  useEffect(() => {
    if (udpatePostData && !loadingUpdatedPost) {
      setLocalPost(udpatePostData.getPostById);
    }
  }, [loadingUpdatedPost, udpatePostData]);

  return (
    <Card style={{ width: '100%' }}>
      <Stack spacing={3}>
        <HeaderCard title={localPost.title} createDate={localPost.createDate} />
        <ContentCard content={localPost.article} />
      </Stack>
      <Grid container justifyContent="flex-end">
        <LikeButton
          loading={loading || loadingUpdatedPost}
          lightUp={lightUp}
          onClick={() => void clickRateButton()}
          amountOfLikes={localPost.likedBy.length}
        />
      </Grid>
    </Card>
  );
};

export default PostCard;
