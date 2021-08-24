import React, { ReactNode } from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  children: ReactNode;
};
function Header({ children }: HeaderProps): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <button className={styles.backBtn}>
        <img src="src/assets/back.svg" />
      </button>
      <h1 className={styles.header}>
        {children}
        <span className={styles.headerDot}>.</span>
      </h1>
    </div>
  );
}

export default Header;
