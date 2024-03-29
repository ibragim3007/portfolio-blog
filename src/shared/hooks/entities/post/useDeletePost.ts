import { GET_USER_BY_ID } from '@/shared/graphQL/@client/getUserById';
import { PostResponseInterface } from '@/shared/graphQL/@post/interface/PostResponseInterface';
import { DELETE_POST } from '@/shared/graphQL/@post/mutations/deletePost';
import { DeletePostType } from '@/shared/interfaces/post.types';
import { Inform } from '@/shared/service/log/log.service';
import { useMutation } from '@apollo/client';

export const useDeletePost = (id: string) => {
  const [deletePost, { loading }] = useMutation<{ deletePost: PostResponseInterface }, { data: DeletePostType }>(
    DELETE_POST,
    { fetchPolicy: 'no-cache', refetchQueries: [GET_USER_BY_ID, 'writtenPosts'] }
  );

  const deletePostFunction = async () => {
    try {
      const res = await deletePost({ variables: { data: { id } } });
      if (res.errors) throw res.errors;
      if (res.data) Inform.success(`Post ${res.data?.deletePost.title} has been deleted`);
    } catch (e) {
      Inform.error(e);
    }
  };

  return {
    loading,
    deletePostFunction,
  };
};
