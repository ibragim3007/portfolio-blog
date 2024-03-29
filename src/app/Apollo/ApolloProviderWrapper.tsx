import { ApolloProvider } from '@apollo/client';
import React from 'react';
import makeApolloClient from './makeApolloClient';

interface ApolloProviderWrapperProps {
  children: React.ReactNode;
}

const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children }) => {
  const client = makeApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
