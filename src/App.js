import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Quicksand from './fonts/Quicksand-Regular.ttf';

import MainScreen from './Components/MainScreen';
import { CssBaseline } from '@material-ui/core';

import TrackState from './context/tracks/TrackState';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 12
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': 'Quicksand',
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
    <TrackState>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainScreen />
      </ThemeProvider>
    </TrackState>
  );
}

export default App;
