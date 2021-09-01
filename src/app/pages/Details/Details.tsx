import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Details.module.css';

export default function Details(): JSX.Element {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Header withBackButton />
      </header>

      <section className={styles.details}>
        <img
          className={styles.image}
          src="https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg"
        />
        <div className={styles.info}>
          <h2 className={styles.title}>The Suicide Squad</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            dignissimos vel, nemo ullam odio quos nostrum doloremque molestias
            cum eius laborum consectetur quaerat, incidunt laudantium impedit
            vero omnis. Autem error suscipit magnam aspernatur ad iure voluptas
            ipsa deleniti culpa nulla!
          </p>
          <span className={styles.ctaText}>Read more</span>
        </div>
      </section>

      <Navigation activeLink="search" />
    </main>
  );
}
