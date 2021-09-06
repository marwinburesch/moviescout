import React from 'react';
import styles from './Rating.module.css';
import RatingIcon from '../RatingIcon/RatingIcon';

type RatingProps = { rating: number; maxRating?: number; className?: string };

function Rating({
  rating,
  maxRating = 5,
  className,
}: RatingProps): JSX.Element {
  function createRangeListFrom(number: number): number[] {
    return Array.from({ length: number }, (_, i) => i + 1);
  }

  return (
    <section className={`${styles.rating} ${className}`}>
      <p className={styles.ratingValue}>{rating}</p>
      <div className={styles.starContainer}>
        {createRangeListFrom(maxRating).map((value) => {
          let starStatus: 'active' | 'inactive' | 'halfActive';
          if (value < rating + 1) {
            if (rating % 1 === 0 || rating > value) {
              starStatus = 'active';
            } else {
              starStatus = 'halfActive';
            }
          } else {
            starStatus = 'inactive';
          }
          return <RatingIcon iconState={starStatus} key={value} />;
        })}
      </div>
    </section>
  );
}
export default Rating;
