import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../assets/SearchIcon';

type SearchBarProps = {
  searchValue: string;
  handleSubmit: () => void;
  setSearchValue: (searchValue: string) => void;
};

function SearchBar({
  searchValue,
  handleSubmit,
  setSearchValue,
}: SearchBarProps): JSX.Element {
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <SearchIcon fill="white" width="12" height="12" />

      <input
        type="search"
        placeholder="Search"
        className={styles.searchBar__input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
