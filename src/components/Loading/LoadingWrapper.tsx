import React, { PropsWithChildren } from 'react';
import { Title } from '../../shared/typography/Title';

interface LoadingWrapperProps extends PropsWithChildren {
  loading?: boolean;
  loadingNode?: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loading, children, loadingNode }) => {
  if (loading) return <>{loadingNode ? loadingNode : <Title variant="title">Loading...</Title>}</>;
  else return <>{children}</>;
};

export default LoadingWrapper;
