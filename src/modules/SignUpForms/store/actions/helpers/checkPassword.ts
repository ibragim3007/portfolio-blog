import { PASSWORD_LENGTH } from '../../../config/config';

export const checkPassword = (passwrod: string): string => {
  if (passwrod.length < PASSWORD_LENGTH) {
    return `At least ${PASSWORD_LENGTH} symbols`;
  }
  return '';
};
