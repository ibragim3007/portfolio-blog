import React from 'react';

import LabelInput from '../../../../components/Fields/LabelInput';
import { Button, Grid, Stack } from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../../../GraphQL/@post/addPost';
import { PostResponseInterface } from '../../../../GraphQL/@post/interfaces/PostResponseInterface';
import { AddPostInterface } from '../../store/interface/AddPostFormInterface';
import { changeValueInput } from '../../store/actions/changeValueInput';

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { fields } = useAppSelector(state => state.addPostReducer);
  const [addPost, { loading }] = useMutation<{ addPost: PostResponseInterface }, { data: AddPostInterface }>(ADD_POST);

  const onChange = (value: string, id: string) => dispath(changeValueInput(value, id));

  const clickAddPostButton = async () => {
    await addPost({
      variables: {
        data: {
          title: fields.title.value,
          article: fields.article.value,
        },
      },
    });
  };

  return (
    <Stack gap={3}>
      <LabelInput id={fields.title.id} value={fields.title.value} onChange={onChange} label={fields.title.label} />
      <LabelInput
        id={fields.article.id}
        value={fields.article.value}
        onChange={onChange}
        label={fields.article.label}
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
