import { IComment } from '@/shared/graphQL/@comment/interface/CommentInterface';
import { RATE_COMMENT } from '@/shared/graphQL/@comment/rateComment';
import { GET_POST_BY_ID } from '@/shared/graphQL/@post/postById';
import { RateCommentType } from '@/shared/interfaces/comment.types';
import { Inform } from '@/shared/service/log/log.service';
import { useMutation } from '@apollo/client';

export const useRateCommentOnPost = (comment: IComment) => {
  const [rateComment, { loading }] = useMutation<IComment, { data: RateCommentType }>(RATE_COMMENT, {
    refetchQueries: [GET_POST_BY_ID, 'comments', 'postId'],
  });

  const rateCommentFunction = async () => {
    try {
      const res = await rateComment({
        variables: {
          data: {
            commentId: comment.id,
          },
        },
      });

      if (res.data) Inform.success('Comment has been added!');
      if (res.errors) throw res.errors[0].message;
    } catch (e) {
      Inform.error(e);
    }
  };

  return {
    loading,
    rateCommentFunction,
  };
};
