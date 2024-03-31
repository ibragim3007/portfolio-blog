import { ADD_COMMENT } from '@/shared/graphQL/@comment/addComment';
import { IAddComment, IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { GET_POST_BY_ID } from '@/shared/graphQL/@post/postById';
import { Inform } from '@/shared/service/log/log.service';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export const useAddCommentToPost = (postId: string) => {
  const [commentText, setCommentText] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };
  const [addComment, { data, loading }] = useMutation<{ addComment: IComment }, { data: IAddComment }>(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_ID, 'comments'],
  });

  const addCommentFunction = async () => {
    try {
      const res = await addComment({ variables: { data: { postId, text: commentText } } });

      if (res.errors) throw res.errors[0].message;
      if (res.data) {
        Inform.success('Comment has been added!');
        setCommentText('');
      }
    } catch (e) {
      Inform.error(e);
    }
  };

  return {
    data,
    loading,
    commentText,
    onChangeInput,
    addCommentFunction,
  };
};
