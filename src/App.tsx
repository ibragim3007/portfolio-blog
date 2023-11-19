import React from 'react';
import './App.css';
import AppRoter from './router/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <AppRoter />
    </Provider>
  );
}

export default App;
