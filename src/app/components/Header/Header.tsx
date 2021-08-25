import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import BackButton from '../BackButton/BackButton';
import FlagButton from '../FlagButton/FlagButton';

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
    <div
      className={`${styles.headerContainer} ${children ? '' : styles.flagGap}`}
    >
      {withBackButton && <BackButton isHighlighted={isHighlighted} />}
      {children && (
        <h1 className={styles.header}>
          {children}
          <span className={styles.headerDot}>.</span>
        </h1>
      )}
      {!children && <FlagButton />}
    </div>
  );
}

export default Header;
