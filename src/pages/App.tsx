import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from '../navigation/RouterConfig';
import { Language } from './TranslationsProvider';

interface IProps {
  changeLanguage: (locale: Language) => void;
  locale: Language;
}

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
      <div className="App">
        <header>
          <button onClick={this.changeLanguage}>
            { this.props.locale === 'en' ? this.locales['ko']: this.locales['en'] }
          </button>
        </header>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
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
