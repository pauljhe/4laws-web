import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import { Language } from '../interfaces/language.interfaces';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import AppRoutes from './AppRoutes';

export interface IAppProps {
  changeLanguage: (locale: Language) => void;
  locale: Language;
}

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

class App extends React.Component<IAppProps & WrappedComponentProps, {}> {
  render() {
    const { intl } = this.props;
    const title = intl.formatMessage({
      id: 'header.title',
      defaultMessage: "Example Title",
      description: "Header Title"
    });
    return (
      <MuiThemeProvider theme={THEME}>
        <HashRouter basename="/">
          <div className="App">
            <Header title={title} { ...this.props } ></Header>
            <AppRoutes />
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default injectIntl(App);
