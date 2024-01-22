import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useLazyQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../../GraphQL/@post/postById';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { useParams } from 'react-router-dom';
import { Title } from '../../shared/typography/Title';
import LoadingCircle from '../Loading/LoadingCircle';
import { useAppSelector } from '../../hooks/redux/reduxHooks';

const PostModule = () => {
  const { me } = useAppSelector(state => state.meReducer);
  const { postId } = useParams();
  const [getPostById, { data, loading, error }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID);

  useEffect(() => {
    if (postId)
      void getPostById({
        variables: {
          data: {
            id: postId,
          },
        },
      });
  }, [getPostById, postId]);

  if (loading) return <LoadingCircle />;
  if (!data) return <Title>No data</Title>;
  if (error) return <Title>{error.message}</Title>;

  const isMyPost = me?.id === data?.getPostById.author.id;
  return <PostCard isMyPost={isMyPost} post={data.getPostById} />;
};

export default PostModule;
