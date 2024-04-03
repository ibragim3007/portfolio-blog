import LayoutWindow from '@/app/router/controller/LayoutWindow';
import EditPostForm from '@/modules/EditPostForm';
import AppWidth from '@/shared/ui/layout/AppWidth';
import { useParams } from 'react-router-dom';

const EditPostPage = () => {
  const { postId } = useParams();

  if (typeof postId !== 'string') return null;

  return (
    <AppWidth>
      <LayoutWindow>
        <EditPostForm postId={postId} />
      </LayoutWindow>
    </AppWidth>
  );
};

export default EditPostPage;
