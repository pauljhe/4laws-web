import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Language } from './TranslationsProvider';

test('renders learn react link', () => {
  const changeLanguage = (locale: Language) => {};
  const locale: Language = 'en';

  render(<App changeLanguage={changeLanguage} locale={locale} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
