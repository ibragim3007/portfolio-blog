import { WrapperForFieldValue } from '../../../../interfaces/globalInterface';
import { AppDispatch } from '../../../../store/store';
import { addPostActions } from '../addPostSlice';
import { AddPostInterface } from '../interface/AddPostFormInterface';

import { RootState } from './../../../../store/store';

export const changeValueInput =
  <T>(value: T, id: string) =>
  (dispath: AppDispatch, getState: () => RootState) => {
    try {
      const signUpFields = getState().addPostReducer;

      const updatedFields = {
        ...signUpFields.fields,
        [id]: {
          ...signUpFields.fields[id as keyof WrapperForFieldValue<AddPostInterface>],
          value: value,
        },
      };

      dispath(addPostActions.changeValue(updatedFields));
    } catch (e) {
      console.log(e);
    }
  };
