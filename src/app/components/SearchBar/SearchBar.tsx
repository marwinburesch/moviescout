import React from 'react';
import SearchIcon from '../assets/SearchIcon';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  searchResult: string;
  handleSubmit: (event: React.FormEvent) => void;
  setSearchResult: (searchResult: string) => void;
  className?: string;
};

function SearchBar({
  searchResult,
  handleSubmit,
  setSearchResult,
  className = '',
}: SearchBarProps): JSX.Element {
  return (
    <form
      className={`${className} ${styles.container}`}
      onSubmit={handleSubmit}
    >
      <SearchIcon fill="white" width="12" height="12" />

      <input
        type="search"
        placeholder="Search"
        className={styles.searchBar__input}
        value={searchResult}
        onChange={(event) => setSearchResult(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
