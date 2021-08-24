import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import BackButton from '../BackButton/BackButton';

type HeaderProps = {
  children: ReactNode | null;
};

function Header({ children }: HeaderProps): JSX.Element {
  let backImage: string;
  if (children !== ' ') {
    backImage = 'src/assets/back.svg';
  } else {
    backImage = 'src/assets/backWhite.svg';
  }

  return (
    <div className={styles.headerContainer}>
      {children && children !== 'TopFive' && (
        <BackButton>{<img src={backImage} />}</BackButton>
      )}
      <h1 className={styles.header}>
        {children}
        {children && children !== ' ' && (
          <span className={styles.headerDot}>.</span>
        )}
      </h1>
    </div>
  );
}

export default Header;
