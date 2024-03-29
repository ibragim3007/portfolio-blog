import { WrapperForFieldValue } from '../../../../shared/interfaces/globalInterface';
import { AppDispatch, RootState } from '../../../../shared/store/store';
import { SignUpFieldsInterface } from '../constants/fields';
import { signUpActions } from '../signUpSlice';

export const checkInputValue =
  (id: string, message?: string, force?: boolean) => (dispath: AppDispatch, getState: () => RootState) => {
    const fields = getState().signUpReducer.fields;

    if (fields[id as keyof WrapperForFieldValue<SignUpFieldsInterface>].value === '' || force) {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<SignUpFieldsInterface>],
          error: {
            status: true,
            message: message || 'Reqired field',
          },
        },
      };
      dispath(signUpActions.changeValue(updatedFields));
    } else {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<SignUpFieldsInterface>],
          error: {
            status: false,
            message: '',
          },
        },
      };
      dispath(signUpActions.changeValue(updatedFields));
    }
  };
