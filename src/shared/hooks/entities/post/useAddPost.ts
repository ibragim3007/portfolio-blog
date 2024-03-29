import { addPostActions } from '@/modules/AddPostForm/store/addPostSlice';
import { AddPostInterface } from '@/modules/AddPostForm/store/interface/AddPostFormInterface';
import { changeValueInput } from '@/modules/Login/store/actions/changeValueInput';
import { checkInputValue } from '@/modules/Login/store/actions/checkInputValue';
import { ADD_POST } from '@/shared/graphQL/@post/addPost';
import { GET_PREVIEW_POSTS } from '@/shared/graphQL/@post/getPreviewPosts';
import { PostResponseInterface } from '@/shared/graphQL/@post/interface/PostResponseInterface';
import { Inform } from '@/shared/service/log/log.service';

import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { useMutation } from '@apollo/client';

export const useAddPost = () => {
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

  return {
    fields,
    loading,
    onChange,
    clickAddPostButton,
  };
};
