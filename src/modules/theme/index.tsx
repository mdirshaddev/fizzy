import type { PropsWithChildren } from 'react';

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendVarTheme
} from '@mui/material';
import { ColorSchemeScript } from './ColorSchemeScript';
import { getDesignTokens } from './getDesignTokens';

const { palette: darkPalette } = getDesignTokens('dark');
const { palette: lightPalette } = getDesignTokens('light');

export const theme = extendVarTheme({
  cssVarPrefix: 'me',
  colorSchemes: {
    light: {
      palette: lightPalette
    },
    dark: {
      palette: darkPalette
    }
  }
});

export default function MaterialThemeProvider(props: PropsWithChildren) {
  const { children } = props;
  return (
    <CssVarsProvider
      theme={theme}
      defaultMode='system'
      disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      {children}
      <ColorSchemeScript />
    </CssVarsProvider>
  );
}
