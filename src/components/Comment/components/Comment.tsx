import { IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Grid } from '@mui/joy';
import React from 'react';

interface CommentProps {
  comment: IComment;
}
const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Grid gap={2} container flexDirection="column">
        <Title variant="title">{comment.user.firstName}</Title>
        <Title variant="text">{comment.text}</Title>
      </Grid>
    </Card>
  );
};

export default Comment;
