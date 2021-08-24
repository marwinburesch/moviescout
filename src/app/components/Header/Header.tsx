import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import BackButton from '../BackButton/BackButton';

type HeaderProps = {
  children: ReactNode;
};
function Header({ children }: HeaderProps): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <BackButton>
        <img src="src/assets/back.svg" />
      </BackButton>
      <h1 className={styles.header}>
        {children}
        <span className={styles.headerDot}>.</span>
      </h1>
    </div>
  );
}

export default Header;
