import Link from 'next/link';
import styles from './Platform.module.css';

export default function Platform() {
  return (
    <section className={styles.platform} id="platform">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <span className={styles.sectionNum}>Platform</span>
            <h2 className={styles.headline}>Four capabilities. One regulated platform.</h2>
          </div>
          <div className={styles.headerRight}>
            <p>
              Altanova operates the regulated access layer no current operator has built under one roof: a Swissmedic-anchored quality system, multi-jurisdictional supply discipline, specialty-pharma medical-channel access, and an AI-enabled compliance and analytics stack.
            </p>
          </div>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <span className={styles.num}>01 · Quality</span>
            <h3>Swissmedic-aligned, EU-GMP-anchored.</h3>
            <p>Manufacturing and batch release under EU-GMP Annex 16. European Pharmacopoeia testing across cannabinoid content, residual solvents, heavy metals, pesticides, mycotoxins and microbiological contamination.</p>
            <Link href="/quality-compliance">Quality framework →</Link>
          </article>
          <article className={styles.card}>
            <span className={styles.num}>02 · Regulatory</span>
            <h3>RP / QP-anchored. Personally accountable.</h3>
            <p>Responsible Person under Art. 5 AMBV and Qualified Person under EU-GMP Annex 16. Non-delegable accountability for batch certification and quality compliance.</p>
            <Link href="/quality-compliance">Regulatory framework →</Link>
          </article>
          <article className={styles.card}>
            <span className={styles.num}>03 · Supply</span>
            <h3>Multi-jurisdictional by design.</h3>
            <p>Qualified EU-GMP partners across selected European markets, supported by per-shipment authorisation frameworks. Asset-light by construction; resilience at every link of the chain.</p>
            <Link href="/partners">Supply integrity →</Link>
          </article>
          <article className={styles.card}>
            <span className={styles.num}>04 · Medical channel</span>
            <h3>Specialty-pharma discipline.</h3>
            <p>Specialty-pharmacy partnerships, hospital-formulary engagement and physician medical-affairs infrastructure built to specialty-pharma standards. Non-promotional in character.</p>
            <Link href="/education-resources">Medical &amp; Scientific Education →</Link>
          </article>
        </div>
        <p className={styles.footerNote}>
          These four capabilities form a platform built once, applied across every therapeutic franchise the Group operates.
        </p>
      </div>
    </section>
  );
}
