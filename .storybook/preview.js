import { addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import locale_en from '../src/assets/i18n/en.json';
import locale_ko from '../src/assets/i18n/ko.json';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';

const translations = {
    'en': locale_en,
    'ko': locale_ko
};

const getMessages = (locale) => translations[locale];

setIntlConfig({
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    getMessages
});

addDecorator(withIntl);

addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
