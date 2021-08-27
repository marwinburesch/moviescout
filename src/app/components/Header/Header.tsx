import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import BackButton from '../BackButton/BackButton';
import BookmarkIcon from '../assets/BookmarkIcon';

type HeaderProps = {
  children?: ReactNode;
  withBackButton?: boolean;
  isHighlighted?: boolean;
};

function Header({
  children,
  withBackButton = false,
  isHighlighted = false,
}: HeaderProps): JSX.Element {
  return (
    <header
      className={`${styles.headerContainer} ${children ? '' : styles.flagGap}`}
    >
      {withBackButton && <BackButton isHighlighted={isHighlighted} />}
      {children && (
        <h1 className={styles.header}>
          {children}
          <span className={styles.headerDot}>.</span>
        </h1>
      )}
      {!children && (
        <BookmarkIcon
          className={styles.bookmarkIcon}
          fill="transparent"
          stroke="#fff"
          height="28"
          width="28"
        />
      )}
    </header>
  );
}

export default Header;
