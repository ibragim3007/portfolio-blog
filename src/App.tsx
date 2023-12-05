import React from 'react';
import './App.css';
import AppRoter from './router/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import ApolloProviderWrapper from './Apollo/ApolloProviderWrapper';

if (process.env.IS_DEV === 'TRUE') {
  loadDevMessages();
  loadErrorMessages();
}

const store = setupStore();
function App() {
  return (
    <Provider store={store}>
      <ApolloProviderWrapper>
        <AppRoter />
      </ApolloProviderWrapper>
    </Provider>
  );
}

export default App;
