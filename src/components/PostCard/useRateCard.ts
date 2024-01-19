import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { GET_POST_BY_ID } from '../../GraphQL/@post/postById';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks';
import { snackBarActions } from '../../store/snackbar/actions/snackBarSlice';
import { RateReqInterface } from './graphql/interface/rateReqInterface';
import { RATE_POST } from './graphql/ratePost';

export const useRateCard = (post: PostResponseInterface) => {
  const [localPost, setLocalPost] = useState(post);
  const me = useAppSelector(state => state.meReducer.me);
  const [lightUp, setLightUp] = useState(me ? localPost.likedBy.some(post => post.userId === me.id) : false);

  const dispath = useAppDispatch();
  const [rate, { loading, error }] = useMutation<{ ratePost: boolean }, { data: RateReqInterface }>(RATE_POST);
  const [getUpdatedPost, { data: udpatePostData, loading: loadingUpdatedPost }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID, {
    fetchPolicy: 'no-cache',
  });

  const clickRateButton = async () => {
    await rate({
      variables: {
        data: {
          postId: localPost.id,
        },
      },
    });

    const updatePost = await getUpdatedPost({
      variables: {
        data: {
          id: post.id,
        },
      },
    });

    if (updatePost.data?.getPostById)
      setLightUp(me ? updatePost.data?.getPostById.likedBy.some(post => post.userId === me.id) : false);
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
        }),
      );
    }
  }, [dispath, error]);

  return {
    clickRateButton,
    lightUp,
  };
};
