import React from 'react';
import ActionLink from './ActionLink';
import type { Story } from '@storybook/react';
import type { ActionLinkProps } from './ActionLink';

export default {
  title: 'Component/ActionLink',
  component: ActionLink,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {},
};

const Template: Story<ActionLinkProps> = (args) => <ActionLink {...args} />;

export const IMDB = Template.bind({});
IMDB.args = {
  children: 'See on IMDB',
  url: 'https://www.imdb.com/',
  hasIcon: false,
};

export const RottenTomatoes = Template.bind({});
RottenTomatoes.args = {
  children: 'See on Rotten Tomatoes',
  url: 'https://www.rottentomatoes.com/',
  hasIcon: true,
};
