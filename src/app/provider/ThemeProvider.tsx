import { CssVarsProvider, extendTheme } from '@mui/joy';
import React, { PropsWithChildren } from 'react';

type ThemeProviderProsp = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProsp) {
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {},
      },
      dark: {
        palette: {
          primary: {
            100: 'red',
          },
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme} defaultMode="system" disableNestedContext>
      {children}
    </CssVarsProvider>
  );
}
