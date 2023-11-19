import { WrapperForFieldValue } from '../../../../interfaces/globalInterface';
import { AppDispatch } from '../../../../store/store';
import { SignUpFieldsInterface } from '../constants/fields';
import { signUpActions } from '../signUpSlice';
import { RootState } from './../../../../store/store';

export const changeValueInput =
  <T>(value: T, id: string) =>
  (dispath: AppDispatch, getState: () => RootState) => {
    try {
      const signUpFields = getState().signUpReducer;

      const updatedFields = {
        ...signUpFields.fields,
        [id]: {
          ...signUpFields.fields[id as keyof WrapperForFieldValue<SignUpFieldsInterface>],
          value: value,
        },
      };

      dispath(signUpActions.changeValue(updatedFields));
    } catch (e) {
      console.log(e);
    }
  };
