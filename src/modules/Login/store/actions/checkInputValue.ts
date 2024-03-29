import { WrapperForFieldValue } from '../../../../shared/interfaces/globalInterface';
import { AppDispatch, RootState } from '../../../../shared/store/store';
import { SignInFieldsInterface } from '../constants/defaultSignInFields';
import { signInActions } from '../signInForm';

export const checkInputValue =
  (id: string, message?: string, force?: boolean) => (dispath: AppDispatch, getState: () => RootState) => {
    const fields = getState().signInReducer.fields;

    if (fields[id as keyof WrapperForFieldValue<SignInFieldsInterface>].value === '' || force) {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<SignInFieldsInterface>],
          error: {
            status: true,
            message: message || 'Reqired field',
          },
        },
      };
      dispath(signInActions.changeValue(updatedFields));
    } else {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<SignInFieldsInterface>],
          error: {
            status: false,
            message: '',
          },
        },
      };
      dispath(signInActions.changeValue(updatedFields));
    }
  };
