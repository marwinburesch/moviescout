import type { ReactNode } from 'react';
import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 'm' | 'l';
  children: ReactNode;
  className?: string;
};

export default function Typography({
  size,
  children,
  className,
}: TypographyProps): JSX.Element {
  if (size === 'm') {
    return (
      <h2 className={`${styles.headlineMedium} ${className} ${children}`}></h2>
    );
  } else {
    return <h1 className={styles.headlineLarge}>{children}</h1>;
  }
}
