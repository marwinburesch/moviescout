import React from 'react';
import styles from './Rating.module.css';
import RatingIcon from '../RatingIcon/RatingIcon';

type RatingProps = { rating: number };

function Rating(): JSX.Element {
  return (
    <section className={styles.rating}>
      <p>3,5</p>
      <div className={styles.starContainer}>
        <RatingIcon iconState={'active'} />
        <RatingIcon iconState={'active'} />
        <RatingIcon iconState={'active'} />
      </div>
    </section>
  );
}
export default Rating;
