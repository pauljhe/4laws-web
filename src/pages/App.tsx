import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import RouterConfig from '../navigation/RouterConfig';
import { Language } from './TranslationsProvider';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

interface IProps {
  changeLanguage: (locale: Language) => void;
  locale: Language;
}

const CustomTheme = createMuiTheme({
  typography: {
    "fontFamily": `"MaruBuri-Regular", "Helvetica", "Arial", "sans-serif"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

class App extends React.Component<IProps> {

  private locales: any = {
    'en': 'English',
    'ko': '한국어'
  };

  constructor(props: IProps) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    this.props.changeLanguage(this.props.locale === 'en' ? 'ko': 'en');
  }

  render() {
    return (
      <MuiThemeProvider theme={CustomTheme}>
        <div className="App">
          <header>
            <Button variant="contained" onClick={this.changeLanguage}>
              { this.props.locale === 'en' ? this.locales['ko']: this.locales['en'] }
            </Button>
          </header>
        </div>
        <HashRouter basename="/">
          <RouterConfig />
        </HashRouter>
      </MuiThemeProvider>
      // <div className="App">
        
      // </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <BrowserRouter>
//         <RouterConfig />
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
