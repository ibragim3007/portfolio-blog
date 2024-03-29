import React from 'react';

import { Button, Grid, Stack } from '@mui/joy';
import LabelInput from '../../../../components/Fields/LabelInput';
import { ADD_POST } from '@/shared/graphQL/@post/addPost';
import { GET_PREVIEW_POSTS } from '@/shared/graphQL/@post/getPreviewPosts';
import { PostResponseInterface } from '@/shared/graphQL/@post/interface/PostResponseInterface';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux/reduxHooks';
import { Inform } from '@/shared/service/log/log.service';

import { changeValueInput } from '../../store/actions/changeValueInput';
import { checkInputValue } from '../../store/actions/checkInputValue';
import { addPostActions } from '../../store/addPostSlice';
import { AddPostInterface } from '../../store/interface/AddPostFormInterface';
import { useMutation } from '@apollo/client';

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { fields } = useAppSelector((state) => state.addPostReducer);
  const [addPost, { loading }] = useMutation<{ addPost: PostResponseInterface }, { data: AddPostInterface }>(ADD_POST, {
    fetchPolicy: 'network-only',
    refetchQueries: [GET_PREVIEW_POSTS, 'getAllPosts'],
  });

  const onChange = (value: string, id: string) => dispath(changeValueInput(value, id));

  const clickAddPostButton = async () => {
    try {
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

      if (result.data) Inform.success(`Post ${result.data.addPost.title} has been added!`);
      if (result.errors) Inform.error(result.errors[0].message);

      dispath(addPostActions.toDefaultValue());
    } catch (e) {
      Inform.error(e);
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
