import { WrapperForFieldValue } from '../../../../shared/interfaces/globalInterface';

export interface SignUpFieldsInterface {
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  email: string;
}

export const defaultSignUpFields: WrapperForFieldValue<SignUpFieldsInterface> = {
  firstName: {
    id: 'firstName',
    value: '',
    label: 'First Name',
  },
  lastName: {
    id: 'lastName',
    value: '',
    label: 'Last Name',
  },
  password: {
    id: 'password',
    value: '',
    label: 'Password',
  },
  repeatPassword: {
    id: 'repeatPassword',
    value: '',
    label: 'Repeat password',
  },
  email: {
    id: 'email',
    value: '',
    label: 'Email',
  },
};
