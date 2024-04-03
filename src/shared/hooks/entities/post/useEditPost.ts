import { EDIT_POST } from '@/shared/graphQL/@post/editPost';
import { PostResponseInterface } from '@/shared/graphQL/@post/interface/PostResponseInterface';
import { GET_POST_BY_ID } from '@/shared/graphQL/@post/postById';
import { EditPostInput } from '@/shared/interfaces/post.types';
import { Inform } from '@/shared/service/log/log.service';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

export const useEditPost = (id: string) => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [getPostById, { data, loading }] = useLazyQuery<
    { getPostById: PostResponseInterface },
    { data: { id: string } }
  >(GET_POST_BY_ID);

  const onChange = (value: string, id: string) => {
    if (id === 'title') setTitle(value);
    if (id === 'article') setArticle(value);
  };

  const [editPost, { loading: isEditLoading }] = useMutation<PostResponseInterface, { data: EditPostInput }>(EDIT_POST);

  useEffect(() => {
    void getPostById({ variables: { data: { id } } });
  }, [getPostById, id]);

  useEffect(() => {
    if (!loading && data) {
      setTitle(data.getPostById.title);
      setArticle(data.getPostById.article);
    }
  }, [data, loading]);

  const editPostFunction = async () => {
    try {
      const res = await editPost({
        variables: {
          data: {
            title,
            article,
            id,
          },
        },
      });

      if (res.errors) throw res.errors[0].message;
      if (res.data) Inform.success('Updated!');
    } catch (e) {
      Inform.error(e);
    }
  };

  return {
    title,
    article,
    loading,
    isEditLoading,
    editPostFunction,
    onChange,
  };
};
