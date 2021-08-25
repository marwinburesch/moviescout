import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import styles from './Navigation.module.css';

function Navigation(): JSX.Element {
  const [activeLink, setActiveLink] = useState<string>('home');
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    fill: activeLink !== 'search' ? 'var(--text-primary)' : 'transparent',
    stroke: 'var(--text-primary)',
  };

  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        isActive={(match) => {
          if (match) {
            setActiveLink('home');
            return true;
          }
          return false;
        }}
      >
        <HomeIcon
          className={styles.home}
          {...(activeLink === 'home' ? active : inactive)}
        />
      </NavLink>
      <NavLink
        to="/search"
        isActive={(match) => {
          if (match) {
            setActiveLink('search');
            return true;
          }
          return false;
        }}
      >
        <SearchIcon
          className={styles.search}
          {...(activeLink === 'search' ? active : inactive)}
        />
      </NavLink>
      <NavLink
        to="/bookmark"
        isActive={(match) => {
          if (match) {
            setActiveLink('bookmark');
            return true;
          }
          return false;
        }}
      >
        <BookmarkIcon
          className={styles.bookmark}
          {...(activeLink === 'bookmark' ? active : inactive)}
        />
      </NavLink>
    </nav>
  );
}

export default Navigation;
