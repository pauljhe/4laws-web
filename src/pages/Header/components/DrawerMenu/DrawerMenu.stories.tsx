import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DrawerMenu from './DrawerMenu';

export default {
  title: 'Header/DrawerMenu',
  component: DrawerMenu
} as Meta;

const Template: Story<{}> = (args) => <DrawerMenu { ...args } />;

export const Example = Template.bind({});