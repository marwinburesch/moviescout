import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../assets/SearchIcon';

type SearchBarProps = {
  searchResult: string;
  handleSubmit: () => void;
  setSearchResult: (searchResult: string) => void;
  className?: string;
};

function SearchBar({
  searchResult,
  handleSubmit,
  setSearchResult,
  className,
}: SearchBarProps): JSX.Element {
  return (
    <form
      className={`${styles.container} ${className}`}
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
