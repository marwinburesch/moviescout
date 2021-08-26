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
    return <h2 className={styles.headlineMedium}>{children}</h2>;
  } else {
    return <h1 className={styles.headlineLarge}>{children}</h1>;
  }
}
