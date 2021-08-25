import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import BackButton from '../BackButton/BackButton';

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
    <div className={styles.headerContainer}>
      {withBackButton && <BackButton isHighlighted={isHighlighted} />}
      <h1 className={styles.header}>
        {children}
        {children && <span className={styles.headerDot}>.</span>}
      </h1>
    </div>
  );
}

export default Header;
