import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '../assets/SearchIcon';

function SearchBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchIcon fill="white" width="12" height="12" />

      <input
        type="search"
        placeholder="Search"
        className={styles.searchBar__input}
      />
    </div>
  );
}

export default SearchBar;
