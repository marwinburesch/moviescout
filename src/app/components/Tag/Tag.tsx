import React from 'react';
import styles from './Tag.module.css';

type TagProps = {
  count?: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Tag({
  count,
  active,
  onClick,
  children,
  className,
}: TagProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${styles.tag} ${className} ${active && styles.active}`}
    >
      {children}
      {count && <span className={styles.count}>({count})</span>}
    </button>
  );
}
