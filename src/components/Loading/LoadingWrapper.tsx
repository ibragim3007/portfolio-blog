import React from 'react';

interface LoadingWrapperProps {
  loading?: boolean;
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ loading, children }) => {
  if (loading) return <h1>LOading...</h1>;
  else return <>{children}</>;
};

export default LoadingWrapper;
