import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WrapperForFieldValue } from '../../../shared/interfaces/globalInterface';
import { AddPostInterface } from './interface/AddPostFormInterface';
import { defaultAddPostFields } from './contants';

interface initialStateInterface {
  fields: WrapperForFieldValue<AddPostInterface>;
}

const initialState: initialStateInterface = {
  fields: defaultAddPostFields,
};

const addPostSlice = createSlice({
  name: 'addPost',
  initialState: initialState,
  reducers: {
    changeValue(state, action: PayloadAction<WrapperForFieldValue<AddPostInterface>>) {
      state.fields = action.payload;
    },
    toDefaultValue(state) {
      state.fields = defaultAddPostFields;
    },
  },
});

export const addPostReducer = addPostSlice.reducer;
export const addPostActions = addPostSlice.actions;
