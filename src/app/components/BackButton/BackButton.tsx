import React from 'react';
import BackButtonIcon from '../assets/BackButtonIcon';
import styles from './BackButton.module.css';

type BackButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};
function BackButton({
  isHighlighted,
  className,
}: BackButtonProps): JSX.Element {
  return (
    <button className={`${styles.backBtn} ${className}`}>
      <BackButtonIcon
        fill={isHighlighted ? 'var(--color-primary)' : 'var(--text-primary)'}
      />
    </button>
  );
}

export default BackButton;
