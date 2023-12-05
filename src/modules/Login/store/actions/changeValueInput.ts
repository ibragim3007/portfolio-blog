import { WrapperForFieldValue } from '../../../../interfaces/globalInterface';
import { AppDispatch } from '../../../../store/store';
import { SignInFieldsInterface } from '../constants/defaultSignInFields';
import { signInActions } from '../signInForm';

import { RootState } from './../../../../store/store';

export const changeValueInput =
  <T>(value: T, id: string) =>
  (dispath: AppDispatch, getState: () => RootState) => {
    try {
      const signUpFields = getState().signInReducer;

      const updatedFields = {
        ...signUpFields.fields,
        [id]: {
          ...signUpFields.fields[id as keyof WrapperForFieldValue<SignInFieldsInterface>],
          value: value,
        },
      };

      dispath(signInActions.changeValue(updatedFields));
    } catch (e) {
      console.log(e);
    }
  };
