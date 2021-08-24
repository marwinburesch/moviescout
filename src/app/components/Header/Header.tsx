import React, { ReactNode } from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps): JSX.Element {
  return (
    <h1 className={styles.header}>
      {children}
      <span className={styles.dot}>.</span>
    </h1>
  );
}
