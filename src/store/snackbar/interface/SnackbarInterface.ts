import { DefaultColorPalette } from '@mui/joy/styles/types';

export interface SnackbarSettingsInterface {
  open: boolean;
  message: string;
  color?: DefaultColorPalette;
  duration?: number; // ms to close
}
