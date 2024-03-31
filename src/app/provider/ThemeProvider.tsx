import { CssVarsProvider, extendTheme } from '@mui/joy';
import React, { PropsWithChildren } from 'react';

type ThemeProviderProsp = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProsp) {
  const theme = extendTheme({
    components: {
      JoyIconButton: {
        defaultProps: {
          style: {
            borderRadius: 12,
          },
        },
      },
      JoyButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
        defaultProps: {
          style: {
            borderRadius: 12,
          },
        },
      },
    },
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
