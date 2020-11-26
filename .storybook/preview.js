import { addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import locale_en from '../src/translations/locales/en.json';
import locale_ko from '../src/translations/locales/ko.json';
import { MemoryRouter } from 'react-router-dom';

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
