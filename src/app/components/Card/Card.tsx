import React from 'react';
import MovieButton from '../MovieButton/MovieButton';
import RatingIcon from '../RatingIcon/RatingIcon';
import styles from './Card.module.css';

export type CardProps = {
  layout: 'detail' | 'compact' | 'wide';
  title: string;
  rating: number | null;
  genres: string[];
  image: string | null;
  isBookmarked?: boolean;
  onBookmarkClick: () => void;
  children: React.ReactNode;
  className?: string;
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
            onButtonClick={onBookmarkClick}
          ></MovieButton>
        </div>
      </div>
      <section>
        <p className={styles.title}>{title}</p>
        <div>
          {rating}
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
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
