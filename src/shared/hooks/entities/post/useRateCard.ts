import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { PostResponseInterface } from '../../../graphQL/@post/interface/PostResponseInterface';
import { GET_POST_BY_ID } from '../../../graphQL/@post/postById';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { snackBarActions } from '../../../store/snackbar/snackBarSlice';
import { RateReqInterface } from '../../../../components/PostCard/graphql/interface/rateReqInterface';
import { RATE_POST } from '../../../../components/PostCard/graphql/ratePost';
import { Inform } from '@/shared/service/log/log.service';

import { GET_PREVIEW_POSTS } from '@/shared/graphQL/@post/getPreviewPosts';

export const useRateCard = (post: PostResponseInterface) => {
  const [localPost, setLocalPost] = useState(post);
  const me = useAppSelector((state) => state.meReducer.me);
  const [lightUp, setLightUp] = useState(me ? localPost?.likedBy.some((post) => post.userId === me.id) : false);

  const dispath = useAppDispatch();
  const [rate, { loading, error }] = useMutation<{ ratePost: boolean }, { data: RateReqInterface }>(RATE_POST, {
    refetchQueries: [GET_PREVIEW_POSTS, 'likesAmount'],
  });
  const [getUpdatedPost, { data: udpatePostData, loading: loadingUpdatedPost }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID, {
    fetchPolicy: 'no-cache',
  });

  const clickRateButton = async () => {
    try {
      if (localPost)
        await rate({
          variables: {
            data: {
              postId: localPost.id,
            },
          },
        });

      if (post) {
        const updatePost = await getUpdatedPost({
          variables: {
            data: {
              id: post.id,
            },
          },
        });

        if (updatePost.data?.getPostById)
          setLightUp(me ? updatePost.data?.getPostById.likedBy.some((post) => post.userId === me.id) : false);
      }
    } catch (e) {
      console.log(e);
      Inform.error(e);
    }
  };

  useEffect(() => {
    if (udpatePostData && !loadingUpdatedPost) {
      setLocalPost(udpatePostData.getPostById);
    }
  }, [loadingUpdatedPost, udpatePostData]);

  useEffect(() => {
    if (error) {
      dispath(
        snackBarActions.setSnack({
          open: true,
          message: error.message,
          color: 'danger',
        })
      );
    }
  }, [dispath, error]);

  return {
    clickRateButton,
    lightUp,
    loading,
    error,
    localPost,
    loadingUpdatedPost,
  };
};
