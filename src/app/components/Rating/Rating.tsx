import React from 'react';
import styles from './Rating.module.css';

type RatingProps = { rating: number };

function Rating(): JSX.Element {
  return (
    <section className={styles.rating}>
      <p>3,5</p>
    </section>
  );
}
export default Rating;
