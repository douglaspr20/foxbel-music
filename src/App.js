import React from 'react'; 
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Quicksand from './fonts/Quicksand-Regular.ttf';

import MainScreen from './Components/MainScreen';
import { CssBaseline } from '@material-ui/core';

const quicksand = {
  fontFamily: 'Quicksand',
fontStyle: 'normal',
fontDisplay: 'swap',
fontWeight: 400,
src: `
  local('Quicksand'),
  local('Quicksand-Regular'),
  url(${Quicksand}) format('ttf')
`,
unicodeRange:
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 12
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [quicksand],
      },
    },
  },
  palette: {
    primary: {
      main: '#e86060',
      secondary: '#662323',
      soft_gray: '#BDBDBD',
      gray: '#828282',
      light: '#FF7676'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainScreen />
    </ThemeProvider>
  );
}

export default App;
