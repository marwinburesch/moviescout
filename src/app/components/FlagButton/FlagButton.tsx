import React from 'react';
import FlagIcon from '../assets/FlagIcon';
import styles from './FlagButton.module.css';

function FlagButton(): JSX.Element {
  return (
    <button className={styles.flagButton}>
      <FlagIcon />
    </button>
  );
}
export default FlagButton;
