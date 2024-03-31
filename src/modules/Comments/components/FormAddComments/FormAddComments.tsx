import { useAddCommentToPost } from '@/shared/hooks/entities/comment/useAddCommentToPost';
import { Textarea } from '@/shared/ui/inputs/Textarea';
import { Button, Grid } from '@mui/joy';
import { useState } from 'react';

interface FormAddCommentsProps {
  postId: string;
}

const FormAddComments: React.FC<FormAddCommentsProps> = ({ postId }) => {
  const [commentText, setCommentText] = useState('');

  const { addCommentFunction, loading } = useAddCommentToPost(postId, commentText);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };
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
