import { config } from '@/app/router/routerConfig';
import { IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { getTimeUSA } from '@/shared/helpers/ToTime';
import { useAppSelector } from '@/shared/hooks/redux/reduxHooks';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import { Grid } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

interface CommentProps {
  comment: IComment;
}
const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { me } = useAppSelector((state) => state.meReducer);
  const isMyComment = comment.user.id === me?.id;
  return (
    <Card style={{ padding: '15px 15px' }}>
      <Grid gap={2} container flexDirection="column">
        <Grid container justifyContent="space-between" alignItems="center">
          <NavLink to={`${config.user}/${comment.user.id}`}>
            <Title
              color={isMyComment ? 'primary' : 'defalut'}
              style={{ textDecoration: 'underline' }}
              variant="subtitle"
            >
              {comment.user.firstName} {comment.user.lastName}
            </Title>
          </NavLink>
          <Title variant="subtitle">{getTimeUSA(comment.createDate)}</Title>
        </Grid>
        <Title style={{ lineBreak: 'anywhere', lineHeight: 1.3 }}>{comment.text}</Title>
      </Grid>
    </Card>
  );
};

export default Comment;
