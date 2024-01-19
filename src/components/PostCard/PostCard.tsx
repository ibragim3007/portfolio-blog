import { Grid, Stack } from '@mui/joy';
import React from 'react';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { Card } from '../../shared/layout/Card';
import LikeButton from '../LikeButton/LikeButton';
import ContentCard from './ContentCard';
import { HeaderCard } from './HeaderCard';
import { useRateCard } from './useRateCard';

interface PostCardProps {
  post: PostResponseInterface;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { clickRateButton, lightUp, localPost, loadingUpdatedPost, loading } = useRateCard(post);

  return (
    <Card style={{ width: '100%' }}>
      <Stack spacing={2}>
        <HeaderCard title={localPost.title} createDate={localPost.createDate} />
        <ContentCard content={localPost.article} />
        <Grid container justifyContent="flex-end" spacing={3}>
          <LikeButton
            loading={loading || loadingUpdatedPost}
            lightUp={lightUp}
            onClick={() => void clickRateButton()}
            amountOfLikes={localPost.likedBy.length}
          />
        </Grid>
      </Stack>
    </Card>
  );
};

export default PostCard;
