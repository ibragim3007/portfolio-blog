import { lazy } from 'react';

const LazyUserPage = lazy(() => import('./components/UserPage'));

export default LazyUserPage;
