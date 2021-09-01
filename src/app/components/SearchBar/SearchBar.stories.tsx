import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Search = (): JSX.Element => (
  <SearchBar
    handleSubmit={() => console.log('Submitted')}
    searchValue=""
    setSearchValue={(searchValue) => console.log(searchValue)}
  />
);

export const SearchWithString = (): JSX.Element => (
  <SearchBar
    handleSubmit={() => console.log('Submitted')}
    searchValue="Top Gun"
    setSearchValue={(searchValue) => console.log(searchValue)}
  />
);
