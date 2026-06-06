import styles from './Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <div className="wrap">
        <div className={styles.header}>
          <div>
            <span className={styles.sectionNum}>05 — Partners</span>
            <h2 className={styles.headline}>Long-term, documented partnerships across the medical-channel value chain.</h2>
          </div>
          <div className={styles.headerRight}>
            <p>
              Every relationship is governed by a documented quality agreement and is subject to regulatory acceptance, supplier audit and signed supply agreement before any commercial activity. Pricing and commercial terms are negotiated under standard confidentiality terms and are not published on this site.
            </p>
          </div>
        </div>

        <div className={styles.tiles}>
          <div className={styles.tile}>
            <span className={styles.tileLabel}>Pharmacies</span>
            <h3>Reliable pharmaceutical-grade supply.</h3>
            <p>Documented batch traceability and pharmacist-education programmes for narcotics-licensed Swiss and selected European pharmacies. Subject to country-specific market authorisation.</p>
            <a href="#contact">Pharmacy partnerships →</a>
          </div>
          <div className={styles.tile}>
            <span className={styles.tileLabel}>Distributors &amp; wholesalers</span>
            <h3>Swissmedic / EU-GDP-aligned wholesale.</h3>
            <p>Supply to authorised pharmaceutical wholesalers operating under Swissmedic, EU-GDP and equivalent national authorisations, with per-shipment narcotics-authorisation frameworks.</p>
            <a href="#contact">Wholesale &amp; distribution →</a>
          </div>
          <div className={styles.tile}>
            <span className={styles.tileLabel}>Manufacturers &amp; suppliers</span>
            <h3>Predictable, multi-year volume.</h3>
            <p>Altanova qualifies a small number of EU-GMP manufacturing and cultivation partners under documented quality agreements and multi-year volume commitments, subject to full GMP audit and regulatory acceptance.</p>
            <a href="#contact">Supplier qualification →</a>
          </div>
          <div className={styles.tile}>
            <span className={styles.tileLabel}>Clinics &amp; hospital pharmacies</span>
            <h3>Formulary-ready and indication-aligned.</h3>
            <p>Indication-aligned clinical dossiers, safety data and health-economics evidence to support hospital-formulary submissions across pain management, neurology, palliative and oncology supportive care.</p>
            <a href="#contact">Hospital engagement →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
