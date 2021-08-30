import React from 'react';
import SearchIcon from '../assets/SearchIcon';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  handleSubmit: (event: React.FormEvent) => void;
  className?: string;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

function SearchBar({
  searchValue,
  handleSubmit,
  setSearchValue,
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
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
