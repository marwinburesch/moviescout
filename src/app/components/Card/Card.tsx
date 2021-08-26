import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  layout: 'detail' | 'compact' | 'wide';
  title: string;
  rating: number | null;
  genres: string[];
  image: string | null;
  isBookmarked?: boolean;
  children: React.ReactNode;
};

export default function Card({
  layout,
  title,
  rating,
  genres,
  image,
  isBookmarked = false,
  children,
}: CardProps): JSX.Element {
  return (
    <article className={styles.article}>
      <div></div>
    </article>
  );
}
