import React from 'react';

import { Button, Grid, Stack } from '@mui/joy';
import LabelInput from '../../../../components/Fields/LabelInput';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux/reduxHooks';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../../../shared/graphQL/@post/addPost';
import { PostResponseInterface } from '../../../../shared/graphQL/@post/interface/PostResponseInterface';
import { changeValueInput } from '../../store/actions/changeValueInput';
import { checkInputValue } from '../../store/actions/checkInputValue';
import { AddPostInterface } from '../../store/interface/AddPostFormInterface';
import { addPostActions } from '../../store/addPostSlice';
import { snackBarActions } from '../../../../shared/store/snackbar/snackBarSlice';

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { fields } = useAppSelector((state) => state.addPostReducer);
  const [addPost, { loading }] = useMutation<{ addPost: PostResponseInterface }, { data: AddPostInterface }>(ADD_POST);

  const onChange = (value: string, id: string) => dispath(changeValueInput(value, id));

  const clickAddPostButton = async () => {
    dispath(checkInputValue(fields.title.id, 'Required enter title'));
    dispath(checkInputValue(fields.article.id, 'Required enter article'));

    if (!fields.article.value || !fields.title.value) {
      return;
    }

    const result = await addPost({
      variables: {
        data: {
          title: fields.title.value,
          article: fields.article.value,
        },
      },
    });

    dispath(addPostActions.toDefaultValue());

    if (result.data?.addPost) {
      dispath(
        snackBarActions.setSnack({
          open: true,
          message: 'Post was added!',
          color: 'success',
        })
      );
    }
  };

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
