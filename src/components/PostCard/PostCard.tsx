import React from 'react';
import { Card } from '../../shared/layout/Card';
import { HeaderCard } from './HeaderCard';
import ContentCard from './ContentCard';
import LikeButton from '../LikeButton/LikeButton';
import { Grid, Stack } from '@mui/joy';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { useAppSelector } from '../../hooks/redux/reduxHooks';

interface PostCardProps {
  post: PostResponseInterface;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const me = useAppSelector(state => state.meReducer.me);

  const isLightUp = me ? post.likedBy.map(post => post.userId).includes(me.id) : false;

  return (
    <Card style={{ width: '100%' }}>
      <Stack spacing={3}>
        <HeaderCard title={post.title} createDate={post.createDate} />
        <ContentCard content={post.article} />
      </Stack>
      <Grid container justifyContent="flex-end">
        <LikeButton lightUp={isLightUp} amountOfLikes={post.likedBy.length} />
      </Grid>
    </Card>
  );
};

export default PostCard;
