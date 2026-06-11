import styles from './TrustStrip.module.css';

export default function TrustStrip() {
  return (
    <section className={styles.trust} aria-label="Regulatory framework">
      <div className={styles.trustBg} aria-hidden="true" />
      <div className={`wrap ${styles.trustGrid}`}>
        <div className={styles.item}>
          <svg className={styles.ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 3 4 6v6c0 4 3 7 8 9 5-2 8-5 8-9V6l-8-3Z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <div>
            <small className={styles.itemLabel}>Swiss authority</small>
            <b>Swissmedic Establishment Licence — in active progression</b>
          </div>
        </div>

        <div className={styles.item}>
          <svg className={styles.ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/>
            <path d="M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/>
          </svg>
          <div>
            <small className={styles.itemLabel}>European recognition</small>
            <b>EU–Switzerland Mutual Recognition Agreement (GMP)</b>
          </div>
        </div>

        <div className={styles.item}>
          <svg className={styles.ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M4 7h16v10H4z"/><path d="M4 11h16"/>
            <path d="M9 17v3"/><path d="M15 17v3"/>
          </svg>
          <div>
            <small className={styles.itemLabel}>Controlled substances</small>
            <b>Art. 4 BetmG narcotics-authorisation framework</b>
          </div>
        </div>

        <div className={styles.item}>
          <svg className={styles.ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 3v18"/><path d="M5 8h14"/>
            <path d="M5 16h14"/><circle cx="12" cy="12" r="9"/>
          </svg>
          <div>
            <small className={styles.itemLabel}>Quality system</small>
            <b>RP / QP-anchored — non-delegable accountability</b>
          </div>
        </div>
      </div>
    </section>
  );
}
