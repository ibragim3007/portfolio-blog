import { lazy } from 'react';

const LazyComments = lazy(() => import('./components/CommentsMain'));

export default LazyComments;
