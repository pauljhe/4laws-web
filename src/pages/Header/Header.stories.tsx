import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { IHeaderProps } from './Header';

export default {
  title: 'Header/Header',
  component: Header
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header { ...args } />;

export const Example = Template.bind({});
Example.args = {
  changeLanguage: () => {},
  locale: 'ko'
};