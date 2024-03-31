import { IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { getTimeUSA } from '@/shared/helpers/ToTime';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Grid } from '@mui/joy';
import React from 'react';

interface CommentProps {
  comment: IComment;
}
const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Card style={{ background: 'transparent' }}>
      <Grid gap={2} container flexDirection="column">
        <Title>{getTimeUSA(comment.createDate)}</Title>
        <Title variant="title">{comment.user.firstName}</Title>
        <Title variant="text">{comment.text}</Title>
      </Grid>
    </Card>
  );
};

export default Comment;
