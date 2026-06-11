import styles from './Partners.module.css';

export default function Partners() {
  return (
    <div id="partners">
      <section className={styles.bannerSection}>
        <div className="wrap">
          <span className={styles.sectionNum}>Partners</span>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h2 className={styles.headline}>Long-term, documented partnerships across the medical-channel value chain.</h2>
            </div>
            <div className={styles.headerRight}>
              <p>
                Altanova welcomes discussions with qualified pharmacies, healthcare professionals, licensed manufacturers, EU-GMP suppliers, distributors and strategic partners aligned with regulated medical-channel access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="wrap">
          <div className={styles.tiles}>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Pharmacies</span>
              <h3>Pharmaceutical-grade supply.</h3>
              <p>Documented batch traceability and continuous supply for narcotics-licensed Swiss and European pharmacies.</p>
              <a href="/contact">Pharmacy partnerships →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Physicians / HCPs</span>
              <h3>Clinical collaboration.</h3>
              <p>Engaging with specialists and treating physicians on safety data, clinical evidence, and therapy guidelines.</p>
              <a href="/education-resources">HCP resources →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Licensed manufacturers</span>
              <h3>Predictable capacity.</h3>
              <p>Working with licensed CMOs and manufacturing facilities operating strictly under pharmaceutical regulations.</p>
              <a href="/contact">Manufacturing partnerships →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>EU-GMP suppliers</span>
              <h3>Qualified sourcing.</h3>
              <p>Long-term agreements with EU-GMP certified suppliers passing rigorous quality audits and regulatory checks.</p>
              <a href="/contact">Supplier qualification →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Importers / distributors</span>
              <h3>Multi-jurisdictional reach.</h3>
              <p>Supply to authorised pharmaceutical wholesalers operating under EU-GDP and national narcotics authorisations.</p>
              <a href="/contact">Wholesale &amp; distribution →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Strategic partners</span>
              <h3>Expanding the platform.</h3>
              <p>Collaborating with complementary healthcare platforms to enhance the regulated medical access layer.</p>
              <a href="/contact">Strategic inquiries →</a>
            </div>
            <div className={styles.tile}>
              <span className={styles.tileLabel}>Investors</span>
              <h3>Institutional scale.</h3>
              <p>Sized and structured for institutional capital focused on durable specialty pharmaceutical businesses.</p>
              <a href="/contact">Investor relations →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
