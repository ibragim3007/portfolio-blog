import React from 'react';
import AppWidth from '../../../shared/layout/AppWidth';
import LayoutWindow from '../../../router/controller/LayoutWindow';
import PostModule from '../../../components/PostCard/PostModule';

const PostPage = () => {
  return (
    <AppWidth>
      <LayoutWindow>
        <PostModule />
      </LayoutWindow>
    </AppWidth>
  );
};

export default PostPage;
