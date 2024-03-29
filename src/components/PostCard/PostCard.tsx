import { Grid, Stack } from '@mui/joy';
import React from 'react';
import { PostResponseInterface } from '../../shared/graphQL/@post/interface/PostResponseInterface';
import { Card } from '../../shared/ui/layout/Card';
import LikeButton from '../LikeButton/LikeButton';
import ContentCard from './ContentCard';
import { HeaderCard } from './HeaderCard';
import { useRateCard } from '../../shared/hooks/entities/post/useRateCard';

interface PostCardProps {
  post: PostResponseInterface;
  isMyPost?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isMyPost }) => {
  const { clickRateButton, lightUp, localPost, loadingUpdatedPost, loading } = useRateCard(post);

  return (
    <Card style={{ width: '100%' }}>
      <Stack spacing={2}>
        <HeaderCard showTools={isMyPost} post={localPost} />
        <ContentCard content={localPost.article} />
        <Grid container justifyContent="flex-end" spacing={3}>
          <LikeButton
            loading={loading || loadingUpdatedPost}
            lightUp={lightUp}
            onClick={() => void clickRateButton()}
            amountOfLikes={localPost.likesAmount}
          />
        </Grid>
      </Stack>
    </Card>
  );
};

export default PostCard;
