import { useAddCommentToPost } from '@/shared/hooks/entities/comment/useAddCommentToPost';
import { Textarea } from '@/shared/ui/inputs/Textarea';
import { Button } from '@mui/joy';
import { Grid } from '@mui/material';

interface FormAddCommentsProps {
  postId: string;
}

const FormAddComments: React.FC<FormAddCommentsProps> = ({ postId }) => {
  const { addCommentFunction, loading, commentText, onChangeInput } = useAddCommentToPost(postId);

  return (
    <Grid gap={2} container>
      <Textarea disabled={loading} fullWidth onChange={onChangeInput} value={commentText} placeholder="Your comment" />
      <Button onClick={() => void addCommentFunction()} loading={loading}>
        Comment
      </Button>
    </Grid>
  );
};

export default FormAddComments;
