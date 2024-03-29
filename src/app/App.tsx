import AppRoter from './router/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from '../shared/store/store';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import ApolloProviderWrapper from './Apollo/ApolloProviderWrapper';
import { ThemeProvider } from './provider/ThemeProvider';
import SnackbarCustom from '@/shared/ui/snackbar/SnackbarCustom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <SnackbarCustom />
          <ToastContainer
            position="top-left"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
      </ApolloProviderWrapper>
    </Provider>
  );
}

export default App;
