import { snackBarReducer } from './snackbar/snackBarSlice';
import { meReducer } from './me/meSlice';
import { signInReducer } from '../../modules/Login/store/signInForm';
import { signUpReducer } from '../../modules/SignUpForms/store/signUpSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { addPostReducer } from '../../modules/AddPostForm/store/addPostSlice';

const rootReducer = combineReducers({
  signUpReducer,
  signInReducer,
  meReducer,
  snackBarReducer,
  addPostReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
