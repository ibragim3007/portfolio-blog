import LayoutWindow from '../../../app/router/controller/LayoutWindow';
import PostModule from '../../../components/PostCard/PostModule';
import AppWidth from '../../../shared/ui/layout/AppWidth';

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
