import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <>
      <main className={styles.hero}>
        {/* Italienska flaggränder, överst i hörn */}
        <img src="/img/grönrand.png" alt="Grön rand" className={styles.greenStripe} />
        <img src="/img/vitrand.png" alt="Vit rand" className={styles.whiteStripe} />
        <img src="/img/rödrand.png" alt="Röd rand" className={styles.redStripe} />

        {/* Rubrik med två separata rader */}
        <div className={styles.titleBox}>
          <span className={styles.titleTop}>OM</span>
          <span className={styles.titleBottom}>ITALIENSKA</span>
        </div>

        {/* Pisa-tornet, centrerat under rubriken */}
        <img src="/img/pisa.png" alt="Pisa Tower" className={styles.pisaTower} />

        {/* Vinglas absolut till höger */}
        <img src="/img/vinglas.png" alt="Vinglas" className={styles.wineGlass} />

        {/* Grid med 6 knappar, två rader */}
        <div className={styles.buttonGrid}>
  <Link to="/docs/Intro" className={styles.gramBtn}>
    INTRO
  </Link>
  <Link to="/docs/Substantiv/Genus%20&%20numerus" className={styles.gramBtn}>
    SUBSTANTIV
  </Link>
  <Link to="/docs/Adjektiv/Regelbunden%20böjning" className={styles.gramBtn}>
    ADJEKTIV
  </Link>
  <Link to="/docs/Verb/Intro" className={styles.gramBtn}>
    VERB
  </Link>
  <Link to="/docs/Pronomen" className={styles.gramBtn}>
    PRONOMEN
  </Link>
  <Link to="/docs/Adverb" className={styles.gramBtn}>
    ADVERB
          </Link>
        </div>
      </main>

      {/* ---- NY SEKTION: ALLT OM ITALIENSK GRAMMATIK ---- */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          {/* Vänster: Rubrik i fyra rader */}
          <div className={styles.infoTitle}>
            <span>ALLT</span>
            <span>OM</span>
            <span>ITALIENSK</span>
            <span>GRAMMATIK</span>
          </div>

          {/* Höger: GRATIS-rutor */}
          <div className={styles.promoStack}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.promoBox}><span>GRATIS</span></div>
            ))}
          </div>

          {/* Italienska flaggränder (sektion 2) */}
          <img src="/img/grönrand.png" alt="Grön rand" className={styles.infoGreenStripe} />
          <img src="/img/vitrand.png" alt="Vit rand" className={styles.infoWhiteStripe} />
          <img src="/img/rödrand.png" alt="Röd rand" className={styles.infoRedStripe} />
        </div>

          {/* Italienska flaggränder (sektion 3) */}
          <img src="/img/grönrand.png" alt="Grön rand" className={styles.infoGreenStripe2} />
          <img src="/img/vitrand.png" alt="Vit rand" className={styles.infoWhiteStripe2} />
          <img src="/img/rödrand.png" alt="Röd rand" className={styles.infoRedStripe2} />
      </section>
    </>
  );
}
