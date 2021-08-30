import React from 'react';
import MovieButton from '../MovieButton/MovieButton';
import Rating from '../Rating/Rating';
import styles from './Card.module.css';

export type CardProps = {
  layout: 'detail' | 'compact' | 'wide';
  title: string;
  rating: number;
  genres: string[];
  image: string | null;
  isBookmarked?: boolean;
  onBookmarkClick: () => void;
  children: React.ReactNode;
};

export default function Card({
  layout,
  title,
  rating,
  genres,
  image,
  isBookmarked = false,
  onBookmarkClick,
  children,
}: CardProps): JSX.Element {
  return (
    <article className={`${styles.article} ${styles[`article--${layout}`]}`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.bookmark}>
          <MovieButton
            iconType="bookmark"
            isActive={isBookmarked}
            onButtonClick={onBookmarkClick}
          ></MovieButton>
        </div>
      </div>
      <section>
        <p className={styles.title}>{title}</p>
        <div className={styles.ratingWrapper}>
          <Rating rating={rating} maxRating={5}></Rating>
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
