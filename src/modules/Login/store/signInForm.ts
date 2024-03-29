import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WrapperForFieldValue } from '../../../shared/interfaces/globalInterface';
import { SignInFieldsInterface, defaultSignInFields } from './constants/defaultSignInFields';

interface initialStateInterface {
  fields: WrapperForFieldValue<SignInFieldsInterface>;
}

const initialState: initialStateInterface = {
  fields: defaultSignInFields,
};

const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState: initialState,
  reducers: {
    changeValue(state, action: PayloadAction<WrapperForFieldValue<SignInFieldsInterface>>) {
      state.fields = action.payload;
    },
  },
});

export const signInReducer = signInFormSlice.reducer;
export const signInActions = signInFormSlice.actions;
