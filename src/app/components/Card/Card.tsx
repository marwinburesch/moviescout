import React from 'react';
import MovieButton from '../MovieButton/MovieButton';
import Rating from '../Rating/Rating';
import styles from './Card.module.css';

export type CardProps = {
  layout?: 'detail' | 'compact' | 'wide';
  id: number;
  title: string;
  rating: number;
  genres: string[];
  image: string | null;
  isBookmarked?: boolean;
  onBookmarkClick: (id: number) => void;
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  layout = 'detail',
  id,
  title,
  rating,
  genres,
  image,
  isBookmarked = false,
  onBookmarkClick,
  children,
  className,
}: CardProps): JSX.Element {
  return (
    <article
      className={`${styles.article} ${
        styles[`article--${layout}`]
      } ${className}`}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.bookmark}>
          <MovieButton
            iconType="bookmark"
            isActive={isBookmarked}
            onButtonClick={() => onBookmarkClick(id)}
          ></MovieButton>
        </div>
      </div>
      <section className={styles.bottomSection}>
        <p className={styles.title}>{title}</p>
        <div className={styles.ratingWrapper}>
          <Rating rating={rating / 2} maxRating={5}></Rating>
        </div>
        {layout === 'detail' && (
          <>
            <p className={styles.genres}>{genres.join(', ')}</p>

            <p className={styles.description}>{children}</p>
          </>
        )}
      </section>
    </article>
  );
}
