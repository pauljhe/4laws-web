import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useHistory, useRouteMatch } from 'react-router-dom';

import locale_en from '../../assets/i18n/en.json';
import locale_ko from '../../assets/i18n/ko.json';
import { Language } from '../../interfaces/language.interfaces';
import Header from '../Header';
import HomeRoutes from './HomeRoutes';

const translations: any = {
  'en': locale_en,
  'ko': locale_ko
};

const Home: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch<{ locale: Language }>();
  const locale = match.params.locale;

  const [currentLocale, setCurrentLocale] = useState(locale);
  if (locale !== currentLocale) {
    setCurrentLocale(locale);
  }

  const changeLanguage = (language: Language) => {
    setCurrentLocale(language);
    history.push(history.location.pathname.replace(/(\/\w+)(\/.*)/, `/${language}$2`));
  };

  // go to default root path when the given locale is not supported.
  if (!Object.keys(translations).includes(locale)) {
    history.replace('/');
  }

  return (
    <IntlProvider key={currentLocale} locale={currentLocale} messages={translations[currentLocale]} defaultLocale="en">
      <Header locale={currentLocale} changeLanguage={changeLanguage}></Header>
      <HomeRoutes></HomeRoutes>
    </IntlProvider>
  );
};

export default Home;