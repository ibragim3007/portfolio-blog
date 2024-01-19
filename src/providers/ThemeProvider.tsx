import { CssVarsProvider } from '@mui/joy';
import React, { PropsWithChildren } from 'react';

type ThemeProviderProsp = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProsp) {
  return (
    <CssVarsProvider defaultMode="system" disableNestedContext>
      {children}
    </CssVarsProvider>
  );
}
