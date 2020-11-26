import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import RouterConfig from '../navigation/RouterConfig';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import { Language } from '../interfaces/language.interfaces';

export interface IAppProps {
  changeLanguage: (locale: Language) => void;
  locale: Language;
}

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"JSDongkang-Regular", "Helvetica", "Arial", "sans-serif"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

class App extends React.Component<IAppProps> {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <HashRouter basename="/">
          <div className="App">
            <Header title="Example Title" { ...this.props } ></Header>
          </div>
          <RouterConfig />
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
