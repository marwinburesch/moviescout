import React from 'react';
import TagGroup from './TagGroup';
import type { Story } from '@storybook/react';
import type { TagGroupProps } from './TagGroup';

export default {
  title: 'Component/TagGroup',
  component: TagGroup,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const mockFunction = () => console.log('📽');

const tags = [
  {
    count: '',
    active: false,
    onClick: mockFunction,
    children: 'all',
  },
  {
    count: '4',
    active: false,
    onClick: mockFunction,
    children: 'animation',
  },
  {
    count: '6',
    active: true,
    onClick: mockFunction,
    children: 'action',
  },
  {
    count: '9',
    active: false,
    onClick: mockFunction,
    children: 'comedy',
  },
  {
    count: '7',
    active: false,
    onClick: mockFunction,
    children: 'sci fi',
  },
];

const Template: Story<TagGroupProps> = (args) => <TagGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tagList: tags,
};
