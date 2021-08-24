import React from 'react';
import styles from './Tag.module.css';

type TagProps = {
  count?: string;
  active?: boolean;
  children: React.ReactNode;
};

export default function Tag({
  count,
  active,
  children,
}: TagProps): JSX.Element {
  return (
    <button
      className={`${styles.tag} ${active ? styles.active : styles.inactive}`}
    >
      {children}
      {count && <span className={styles.count}>({count})</span>}
    </button>
  );
}
