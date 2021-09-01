import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import styles from './Navigation.module.css';

type NavigationProps = {
  activeLink: 'home' | 'search' | 'bookmark';
  className?: string;
};

function Navigation({ activeLink, className }: NavigationProps): JSX.Element {
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    stroke: 'var(--text-primary)',
  };

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <Link to="/">
        <HomeIcon
          className={styles.home}
          {...(activeLink === 'home' ? active : inactive)}
        />
      </Link>
      <Link to="/search">
        <SearchIcon
          className={styles.search}
          {...(activeLink === 'search' ? active : inactive)}
        />
      </Link>
      <Link to="/bookmark">
        <BookmarkIcon
          className={styles.bookmark}
          {...(activeLink === 'bookmark' ? active : inactive)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
