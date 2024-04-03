import { useQuery } from '@apollo/client';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TheHeader from '../../modules/header';
import { MeInterface } from '../../shared/graphQL/@client/interface/meInterface';
import { ME } from '../../shared/graphQL/@client/me';
import { useAppDispatch } from '../../shared/hooks/redux/reduxHooks';

import LazyAbout from '@/pages/About/LazyAbout';
import LazyUserPage from '@/pages/UserPage';
import AuthPage from '../../pages/AuthPage';
import HomePage from '../../pages/Home';
import PostPage from '../../pages/PostPage';
import SignUpPage from '../../pages/SignUp/components/SignUpPage';
import { setMeAction } from '../../shared/store/me/actions/setMeAction';
import { WrapperApp } from '../../shared/ui/layout/WrapperApp';
import { config } from './routerConfig';
import EditPostPageLazy from '@/pages/EditPostPage';

const AppRoter: React.FC = () => {
  const { data, loading } = useQuery<{ me: MeInterface }>(ME);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (data?.me && !loading) {
      dispath(setMeAction(data.me));
    }
  }, [loading, data, dispath]);

  return (
    <WrapperApp>
      <BrowserRouter>
        <TheHeader />
        <Suspense fallback="loading...">
          <Routes>
            <Route path={config.feed} element={<HomePage />} />
            <Route path={config.post}>
              <Route path={':postId'} element={<PostPage />} />
              <Route path={`:postId/${config.edit}`} element={<EditPostPageLazy />} />
            </Route>
            <Route path={config.user}>
              <Route path={':userId'} element={<LazyUserPage />} />
            </Route>
            <Route path={config.about} element={<LazyAbout />} />
            <Route path={config.admin} element={<AuthPage />} />
            <Route path={config.signup} element={<SignUpPage />} />
            <Route path="*" element={<Navigate to={config.feed} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </WrapperApp>
  );
};

export default AppRoter;
