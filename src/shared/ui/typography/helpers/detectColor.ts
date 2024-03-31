import { colors } from '../interface/TitleInterfaces';

export const detectColor = (color: colors = 'defalut') => {
  if (color === 'defalut') return 'var(--text-color)';
  else if (color === 'error') return 'var(--error-color)';
  else if (color === 'primary') return 'var(--link-color)';
  return 'var(--text-color)';
};
