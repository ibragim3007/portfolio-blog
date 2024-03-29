import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WrapperForFieldValue } from '../../../shared/interfaces/globalInterface';
import { SignUpFieldsInterface, defaultSignUpFields } from './constants/fields';

interface initialStateInterface {
  fields: WrapperForFieldValue<SignUpFieldsInterface>;
}

const initialState: initialStateInterface = {
  fields: defaultSignUpFields,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: initialState,
  reducers: {
    changeValue(state, action: PayloadAction<WrapperForFieldValue<SignUpFieldsInterface>>) {
      state.fields = action.payload;
    },
  },
});

export const signUpReducer = signUpSlice.reducer;
export const signUpActions = signUpSlice.actions;
