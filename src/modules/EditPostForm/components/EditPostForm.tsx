import LabelInput from '@/components/Fields/LabelInput';
import { useEditPost } from '@/shared/hooks/entities/post/useEditPost';
import { Card } from '@/shared/ui/layout/Card';
import { Button } from '@mui/joy';
import { Grid } from '@mui/material';
import React from 'react';

interface EditPostFormProps {
  postId: string;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ postId }) => {
  const { title, article, isEditLoading, loading, onChange, editPostFunction } = useEditPost(postId);

  return (
    <Card>
      <Grid container gap={2}>
        <Grid container gap={2} flexDirection="column">
          <LabelInput label="Title" id={'title'} value={title} onChange={onChange} />
          <LabelInput label="Article" id={'article'} value={article} onChange={onChange} multiline />
        </Grid>
        <Button onClick={() => void editPostFunction()} loading={loading || isEditLoading}>
          Update
        </Button>
      </Grid>
    </Card>
  );
};

export default EditPostForm;
