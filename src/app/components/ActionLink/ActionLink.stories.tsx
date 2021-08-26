import React from 'react';
import ActionLink from './ActionLink';
import { Story } from '@storybook/react';
import type { ActionLinkProps } from './ActionLink';

export default {
  title: 'Component/ActionLink',
  component: ActionLink,
  argTypes: {},
};

const Template: Story<ActionLinkProps> = (args) => <ActionLink {...args} />;

export const ActionLinkStory = Template.bind({});
ActionLinkStory.args = {
  children: 'Google',
  link: 'https://google.com',
  hasIcon: true,
};
