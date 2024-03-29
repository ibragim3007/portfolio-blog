import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MeInterface } from '../../graphQL/@client/interface/meInterface';

interface initialStateInterface {
  me?: MeInterface | null;
}

const initialState: initialStateInterface = {};

const meSlice = createSlice({
  name: 'me',
  initialState: initialState,
  reducers: {
    setMe(state, action: PayloadAction<MeInterface | null>) {
      state.me = action.payload;
    },
  },
});

export const meReducer = meSlice.reducer;
export const meActions = meSlice.actions;
