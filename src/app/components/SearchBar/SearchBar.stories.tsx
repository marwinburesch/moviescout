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
    searchResult=""
    setSearchResult={(searchResult) => console.log(searchResult)}
  />
);

export const SearchWithString = (): JSX.Element => (
  <SearchBar
    handleSubmit={() => console.log('Submitted')}
    searchResult="Top Gun"
    setSearchResult={(searchResult) => console.log(searchResult)}
  />
);
