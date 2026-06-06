import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.heroTop}>
          <span className={styles.heroLabel}>Swiss specialty pharma — Zug, Switzerland</span>
          <span className={styles.heroCounter}>01 — 07</span>
        </div>

        <h1 className={styles.heroHeadline}>
          Swiss specialty pharma.<br />Life-changing therapies for chronic disease states.
        </h1>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p>
              Altanova Pharma Group AG is a Swiss specialty pharmaceutical platform building the regulated access layer for specialty therapies. We work to Swissmedic and EU-GMP standards across Switzerland and selected European markets.
            </p>
            <div className={styles.heroActions}>
              <a className="btn btn-primary" href="#contact">Partnership inquiries <span className="arrow">→</span></a>
              <a className="btn btn-outline" href="#quality">Quality &amp; Compliance framework <span className="arrow">→</span></a>
            </div>
          </div>

          <aside className={styles.heroSide} aria-label="At a glance">
            <div className={styles.kv}><span>Domicile</span><b>Rigistrasse 3, 6300 Zug</b></div>
            <div className={styles.kv}><span>Category</span><b>Specialty pharmaceutical</b></div>
            <div className={styles.kv}><span>Launch franchise</span><b>Cannabinoid medicines</b></div>
            <div className={styles.kv}><span>Channel</span><b>Regulated medical only</b></div>
            <div className={styles.kv}><span>Audience</span><b>HCPs · Pharmacies · Regulators · Partners</b></div>
            <div className={`${styles.kv} ${styles.kvLast}`}><span>Backers</span><b>PG Equity Group · MWP Family Office</b></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
