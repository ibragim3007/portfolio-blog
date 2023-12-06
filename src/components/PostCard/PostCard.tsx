import { useMutation } from '@apollo/client';
import { Grid, Stack } from '@mui/joy';
import React from 'react';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { useAppSelector } from '../../hooks/redux/reduxHooks';
import { Card } from '../../shared/layout/Card';
import LikeButton from '../LikeButton/LikeButton';
import ContentCard from './ContentCard';
import { HeaderCard } from './HeaderCard';
import { RateReqInterface } from './graphql/interface/rateReqInterface';
import { RATE_POST } from './graphql/ratePost';
import { GET_ALL_POSTS } from '../../GraphQL/@post/getAllPosts';

interface PostCardProps {
  post: PostResponseInterface;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const me = useAppSelector(state => state.meReducer.me);

  const lightUp = me ? post.likedBy.some(post => post.userId === me.id) : false;

  const [rate] = useMutation<{ ratePost: boolean }, { data: RateReqInterface }>(RATE_POST, {
    refetchQueries: [GET_ALL_POSTS],
  });

  const clickRateButton = async () => {
    await rate({
      variables: {
        data: {
          postId: post.id,
        },
      },
    });
  };

  return (
    <Card style={{ width: '100%' }}>
      <Stack spacing={3}>
        <HeaderCard title={post.title} createDate={post.createDate} />
        <ContentCard content={post.article} />
      </Stack>
      <Grid container justifyContent="flex-end">
        <LikeButton lightUp={lightUp} onClick={() => void clickRateButton()} amountOfLikes={post.likedBy.length} />
      </Grid>
    </Card>
  );
};

export default PostCard;
