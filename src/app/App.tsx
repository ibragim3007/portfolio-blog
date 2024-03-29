import React from 'react';
import AppRoter from './router/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from '../shared/store/store';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import ApolloProviderWrapper from './Apollo/ApolloProviderWrapper';
import { ThemeProvider } from './provider/ThemeProvider';

if (process.env.IS_DEV === 'TRUE') {
  loadDevMessages();
  loadErrorMessages();
}

const store = setupStore();
function App() {
  return (
    <Provider store={store}>
      <ApolloProviderWrapper>
        <ThemeProvider>
          <AppRoter />
        </ThemeProvider>
      </ApolloProviderWrapper>
    </Provider>
  );
}

export default App;
