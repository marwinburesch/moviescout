import React from 'react';
import styles from './Discover.module.css';
import Header from '../../components/Header/Header';

export default function Discover(): JSX.Element {
  return (
    <main className={styles.container}>
      <Header withBackButton isHighlighted>
        Discover
      </Header>
    </main>
  );
}
