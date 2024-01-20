import React, { PropsWithChildren } from 'react';
import LoadingCircle from './LoadingCircle';

interface LoadingWrapperProps extends PropsWithChildren {
  loading?: boolean;
  loadingNode?: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loading, children, loadingNode }) => {
  if (loading) return <>{loadingNode ? loadingNode : <LoadingCircle />}</>;
  else return <>{children}</>;
};

export default LoadingWrapper;
