import React from 'react';
import Search from './Search';

export default {
  title: 'Pages/Search',
  component: Search,

  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'fullscreen',
  },
};

export const SearchPage = (): JSX.Element => <Search />;
