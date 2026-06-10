import Image from 'next/image';
import styles from './Company.module.css';

export default function Company() {
  return (
    <section className={styles.block} id="company">
      <div className="wrap">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>02 — Company</span>
            <h2 className={styles.headline}>Swiss specialty pharma, built for the regulated medical channel.</h2>
          </div>
          <div className={styles.headerRight}>
            <p>
              Altanova Pharma Group AG was established as a Swiss specialty pharmaceutical platform — a quality and access layer built for therapeutic franchises in chronic disease care. Our launch franchise addresses a specific gap in European medicine: cannabinoid therapies sit between agricultural supply and pharmaceutical expectations, and the regulated medical channel has lacked a Swiss-quality access layer between the two.
            </p>
          </div>
        </div>

        <div className={styles.heroImgPlaceholder}>
          <Image
            src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781041568/hero-image-01_g2z0ce.png"
            alt="Altanova Pharma — Swiss specialty pharma facility"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        <div className={styles.split}>
          <div className={styles.col}>
            <span className={styles.colLabel}>Our mission</span>
            <blockquote className={styles.blockquote}>
              Life-changing therapies for chronic disease states.
            </blockquote>
            <p>
              Altanova is quality-led, not grower-led. We operate exclusively in the regulated medical channel. We do not market to patients, we do not operate in the recreational market, and we do not maintain any consumer or wellness adjacencies anywhere in our corporate structure.
            </p>
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>How we operate</span>
            <p>
              Altanova runs a Swissmedic-aligned quality system anchored by Responsible Person and Qualified Person functions; qualified EU-GMP supply relationships across multiple jurisdictions; and a specialty-pharma medical-channel infrastructure built for pharmacies, hospital formularies and physicians.
            </p>
            <p>
              Our work is institutional rather than promotional. Our governance is sized to the standard expected of a Swiss specialty pharmaceutical company preparing for institutional investment and, in time, a strategic exit to a specialty-pharma acquirer.
            </p>
            <a href="#leadership" className={styles.readMore}>Read about our leadership →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
