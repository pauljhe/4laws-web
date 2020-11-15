import React from 'react';
import { IntlProvider } from 'react-intl';
import App from './App';
import locale_en from '../translations/locales/en.json';
import locale_ko from '../translations/locales/ko.json';

export type Language = 'en' | 'ko';

const translations: any = {
  'en': locale_en,
  'ko': locale_ko
};

interface IState {
  locale: Language;
}

class TranslationsProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);

    this.state = { locale: 'en' };
  }

  changeLanguage(locale: Language) {
    this.setState({ locale });
  }

  public render() {
    const translation = translations[this.state.locale];
    return (
      <IntlProvider key={this.state.locale} locale={this.state.locale} messages={translation} defaultLocale="en">
        <App changeLanguage={this.changeLanguage} locale={this.state.locale} />
      </IntlProvider>
    );
  }
}

export default TranslationsProvider;