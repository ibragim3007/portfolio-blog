import { IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { Title } from '@/shared/ui/typography/Title';

import Comment from './Comment/Comment';
import { Grid } from '@mui/material';

interface CommentsMainProps {
  comments: IComment[];
}

const CommentsMain: React.FC<CommentsMainProps> = ({ comments }) => {
  return (
    <Grid gap={2} container flexDirection="column" style={{ marginTop: '2em' }}>
      <Title variant="title">{comments.length > 0 ? 'Comments' : 'There is no comments'}</Title>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Grid>
  );
};

export default CommentsMain;
