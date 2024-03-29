import { InputColorType } from '../interface/ColorVariants';

export const detectColorInput = (color: InputColorType): string => {
  if (color === 'error') return 'var(--error-color)';
  else if (color === 'warning') return 'yellow';
  else if (color === 'primary') return 'var(--border-color)';

  return '';
};
