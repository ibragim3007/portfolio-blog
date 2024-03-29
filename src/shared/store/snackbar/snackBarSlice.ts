import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SnackbarSettingsInterface } from './interface/SnackbarInterface';

interface initialStateInterface {
  settings: SnackbarSettingsInterface;
}

const initialState: initialStateInterface = {
  settings: {
    open: false,
    message: '',
    duration: 3000,
  },
};

const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState: initialState,
  reducers: {
    setSnack: (state, action: PayloadAction<SnackbarSettingsInterface>) => {
      state.settings = action.payload;
    },
  },
});

export const snackBarReducer = snackBarSlice.reducer;
export const snackBarActions = snackBarSlice.actions;
