import React from 'react';
import MovieButton from './MovieButton';
import { Story } from '@storybook/react';
import type { MovieButtonProps } from './MovieButton';

export default {
  title: 'Component/MovieButton',
  component: MovieButton,
  argTypes: {
    iconType: {
      options: [
        'searchActive',
        'searchInactive',
        'homeActive',
        'homeInactive',
        'starActive',
        'starHalfActive',
        'starInactive',
        'bookmarkActive',
        'bookmarkInactive',
      ],
      control: { type: 'select' },
    },
  },
};

const Template: Story<MovieButtonProps> = (args) => <MovieButton {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconType: 'homeActive',
};

export const Bookmark = Template.bind({});
Bookmark.args = {
  iconType: 'bookmarkActive',
};

export const Star = Template.bind({});
Star.args = {
  iconType: 'starActive',
};

// TODO find out why this defaults to star
export const SearchIcon = Template.bind({});
SearchIcon.args = {
  iconType: 'searchActive',
};
