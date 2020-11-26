import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TranslationMenu, { ITranslationMenuProps } from './TranslationMenu';

export default {
  title: 'Header/TranslationMenu',
  component: TranslationMenu,
  parameters: {
    backgrounds: { default: 'dark' }
  }
} as Meta;

const Template: Story<ITranslationMenuProps> = (args) => <TranslationMenu { ...args } />;

export const Example = Template.bind({});
Example.args = {
  changeLanguage: () => {},
  locale: 'ko'
};