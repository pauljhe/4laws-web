import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './AppRoutes';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"Ikkeullim", "Helvetica", "Arial", "sans-serif"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: { main: '#FFFFFF' }
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <HashRouter basename="/">
          <AppRoutes />
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
