import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 'm' | 'l';
  children: React.ReactNode;
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  if (size === 'm') {
    return <h2 className={styles.headline2}>{children}</h2>;
  } else {
    return <h1 className={styles.headline1}>{children}</h1>;
  }
}
