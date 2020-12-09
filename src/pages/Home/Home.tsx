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

  // go to default root path when the given locale is not supported.
  if (!Object.keys(translations).includes(locale)) {
    history.replace('/');

  }
  const [currentLocale] = useState(locale);
  const changeLanguage = (language: Language) => {
    history.push(history.location.pathname.replace(/(\/\w+)(\/.*)/, `/${language}$2`));
    history.go(0);
  };

  return (
    <IntlProvider key={currentLocale} locale={currentLocale} messages={translations[currentLocale]} defaultLocale="en">
      <Header locale={currentLocale} changeLanguage={changeLanguage}  ></Header>
      <HomeRoutes></HomeRoutes>
    </IntlProvider>
  );
};

export default Home;