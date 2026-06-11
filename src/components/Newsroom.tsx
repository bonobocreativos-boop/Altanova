import Link from 'next/link';
import styles from './Newsroom.module.css';

export default function Newsroom() {
  return (
    <section className={styles.newsroom} id="newsroom">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <span className={styles.sectionNum}>07 — Newsroom &amp; policy watch</span>
            <h2 className={styles.headline}>Specialty-pharma cadence. Factual. Restrained.</h2>
          </div>
          <div className={styles.headerRight}>
            <p>
              Altanova communicates with the cadence of a Swiss specialty pharmaceutical operator — factual press releases, peer-reviewed publication notices, and a quarterly regulatory-watch summary. Press releases are issued in EN and DE from Phase 1; FR is added at Phase 2.
            </p>
          </div>
        </div>

        <div className={styles.articles}>
          <article className={styles.article}>
            {/* Image placeholder — upload to Cloudinary and replace */}
            <div className={`img-placeholder ${styles.articleImg}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Press image</span>
            </div>
            <div className={styles.meta}>Press release · 21 May 2026</div>
            <h3>Altanova Pharma Group AG announces Seed close and Swissmedic establishment-licence application.</h3>
            <p>Altanova Pharma Group AG today announced the close of its CHF 2.5 million Seed financing led by PG Equity Group and MWP Family Office, and the lodging of its Swissmedic establishment-licence application.</p>
            <Link href="/under-construction">Read the release →</Link>
          </article>
          <article className={styles.article}>
            {/* Image placeholder — upload to Cloudinary and replace */}
            <div className={`img-placeholder ${styles.articleImg}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Press image</span>
            </div>
            <div className={styles.meta}>Publication notice · 12 May 2026</div>
            <h3>Updated AHRQ systematic review on cannabis-based products for chronic pain: implications for Swiss prescribers.</h3>
            <p>Educational summary prepared for Swiss healthcare professionals; accessible inside the Altanova Medical Academy upon HCP-confirmation.</p>
            <Link href="/hcp-portal">Open in HCP area →</Link>
          </article>
          <article className={styles.article}>
            {/* Image placeholder — upload to Cloudinary and replace */}
            <div className={`img-placeholder ${styles.articleImg}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Press image</span>
            </div>
            <div className={styles.meta}>Regulatory watch · 02 May 2026</div>
            <h3>Quarterly regulatory summary — Switzerland, Germany, EU. April 2026.</h3>
            <p>Concise overview of Swissmedic, BfArM and EMA actions affecting cannabinoid medicines, prepared for partners, importers and HCPs.</p>
            <Link href="/under-construction">Download summary →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
