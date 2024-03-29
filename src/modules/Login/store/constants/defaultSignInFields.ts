import { WrapperForFieldValue } from '../../../../shared/interfaces/globalInterface';

export interface SignInFieldsInterface {
  email: string;
  password: string;
}

export const defaultSignInFields: WrapperForFieldValue<SignInFieldsInterface> = {
  email: {
    id: 'email',
    value: '',
    label: 'Email',
  },
  password: {
    id: 'password',
    value: '',
    label: 'Password',
  },
};
