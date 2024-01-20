import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useLazyQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../../GraphQL/@post/postById';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import { useParams } from 'react-router-dom';
import { Title } from '../../shared/typography/Title';
import LoadingCircle from '../Loading/LoadingCircle';

const PostModule = () => {
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
  if (error) return <Title>Error</Title>;

  return <PostCard post={data.getPostById} />;
};

export default PostModule;
