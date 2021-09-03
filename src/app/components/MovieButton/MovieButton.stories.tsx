import React from 'react';
import MovieButton from './MovieButton';
import type { Story } from '@storybook/react';
import type { MovieButtonProps } from './MovieButton';

export default {
  title: 'Component/MovieButton',
  component: MovieButton,
  argTypes: {
    iconType: {
      options: ['search', 'home', 'bookmark'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<MovieButtonProps> = (args) => <MovieButton {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconType: 'home',
  isActive: true,
};

export const Bookmark = Template.bind({});
Bookmark.args = {
  iconType: 'bookmark',
  isActive: true,
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  iconType: 'search',
  isActive: true,
};
