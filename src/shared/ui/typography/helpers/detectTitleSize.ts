import { variants } from '../interface/TitleInterfaces';

export const detectTitleSize = (variant?: variants) => {
  if (variant === 'text') return '14px';
  else if (variant === 'subtitle') return '12px';
  else if (variant === 'title') return '22px';
};
