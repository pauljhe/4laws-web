import React from 'react';
import { IntlProvider } from 'react-intl';
import App from './App';
import locale_en from '../assets/i18n/en.json';
import locale_ko from '../assets/i18n/ko.json';
import { Language } from '../interfaces/language.interfaces';

const translations: any = {
  'en': locale_en,
  'ko': locale_ko
};

export interface ITranslationsProviderState {
  locale: Language;
}

class TranslationsProvider extends React.Component<{}, ITranslationsProviderState> {
  constructor(props: {}) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);

    this.state = { locale: 'en' };
  }

  changeLanguage(locale: Language) {
    this.setState((state) => ({ ...state, locale }));
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