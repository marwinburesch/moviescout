import React from 'react';
import RatingIcon from './RatingIcon';
import type { Story } from '@storybook/react';
import type { RatingIconProps } from './RatingIcon';

export default {
  title: 'Component/RatingIcon',
  component: RatingIcon,
  argTypes: {
    iconState: {
      options: ['active', 'inactive', 'halfActive'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<RatingIconProps> = (args) => <RatingIcon {...args} />;

export const Active = Template.bind({});
Active.args = {
  iconState: 'active',
};
