import { snackBarReducer } from './snackbar/actions/snackBarSlice';
import { meReducer } from './me/meSlice';
import { signInReducer } from './../modules/Login/store/signInForm';
import { signUpReducer } from './../modules/SignUpForms/store/signUpSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  signUpReducer,
  signInReducer,
  meReducer,
  snackBarReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
