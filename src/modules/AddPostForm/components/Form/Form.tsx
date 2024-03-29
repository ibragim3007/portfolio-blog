import React from 'react';

import { Button, Grid, Stack } from '@mui/joy';
import LabelInput from '../../../../components/Fields/LabelInput';

import { useAddPost } from '@/shared/hooks/entities/post/useAddPost';

const Form: React.FC = () => {
  const { fields, loading, onChange, clickAddPostButton } = useAddPost();
  return (
    <Stack gap={3}>
      <LabelInput
        id={fields.title.id}
        value={fields.title.value}
        error={fields.title.error?.status}
        hint={fields.title.error?.message}
        label={fields.title.label}
        onChange={onChange}
      />
      <LabelInput
        id={fields.article.id}
        value={fields.article.value}
        label={fields.article.label}
        error={fields.article.error?.status}
        hint={fields.article.error?.message}
        onChange={onChange}
        multiline
      />
      <Grid container justifyContent="space-between">
        <Button variant="plain">Cancel</Button>
        <Button loading={loading} onClick={() => void clickAddPostButton()}>
          Add
        </Button>
      </Grid>
    </Stack>
  );
};

export default Form;
