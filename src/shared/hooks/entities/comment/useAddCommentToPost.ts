import { ADD_COMMENT } from '@/shared/graphQL/@comment/addComment';
import { IAddComment, IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { Inform } from '@/shared/service/log/log.service';
import { useMutation } from '@apollo/client';

export const useAddCommentToPost = (postId: string, text: string) => {
  const [addComment, { data, loading }] = useMutation<{ addComment: IComment }, { data: IAddComment }>(ADD_COMMENT, {});

  const addCommentFunction = async () => {
    try {
      const res = await addComment({ variables: { data: { postId, text } } });

      if (res.errors) throw res.errors[0].message;
    } catch (e) {
      Inform.error(e);
    }
  };

  return {
    data,
    loading,
    addCommentFunction,
  };
};
