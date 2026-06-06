import styles from './BrandStrip.module.css';

export default function BrandStrip() {
  return (
    <div className={styles.strip} aria-label="Brand signature">
      <div className={`wrap ${styles.inner}`}>
        <span>Swiss Precision</span>
        <span className={styles.dot} />
        <span>Scientific Integrity</span>
        <span className={styles.dot} />
        <span>Patient Impact</span>
        <span className={styles.dot} />
        <span>Zug, Switzerland · Est. 2026</span>
      </div>
    </div>
  );
}
