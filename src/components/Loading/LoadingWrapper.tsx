import React, { PropsWithChildren } from 'react';
import { Title } from '../../shared/typography/Title';
import MultipleSkeletonCards from '../PostCard/SkeletonCard/MultipleSkeletonCards';

interface LoadingWrapperProps extends PropsWithChildren {
  loading?: boolean;
  loadingNode?: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loading, children, loadingNode }) => {
  if (loading) return <>{loadingNode ? <MultipleSkeletonCards /> : <Title variant="title">Loading...</Title>}</>;
  else return <>{children}</>;
};

export default LoadingWrapper;
