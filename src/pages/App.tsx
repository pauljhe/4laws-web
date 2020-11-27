import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import RouterConfig from '../navigation/RouterConfig';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import { Language } from '../interfaces/language.interfaces';
import { injectIntl, WrappedComponentProps } from 'react-intl';

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
          </div>
          <RouterConfig />
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default injectIntl(App);
