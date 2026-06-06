import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <a href="#" aria-label="Altanova Pharma">
              <span className={styles.brandName}>Altanova<span className={styles.brandSuffix}>Pharma Group AG</span></span>
            </a>
            <p className={styles.brandTagline}>
              Swiss Precision<span className={styles.dot}>·</span>Scientific Integrity<span className={styles.dot}>·</span>Patient Impact
            </p>
            <p className={styles.footAddr}>
              Altanova Pharma Group AG<br />
              Rigistrasse 3<br />
              6300 Zug<br />
              Switzerland<br />
              <a href="mailto:corporate@altanovapharma.ch">corporate@altanovapharma.ch</a>
            </p>
          </div>

          <div className={styles.footCol}>
            <h4>Company</h4>
            <ul>
              <li><a href="#company">About</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#governance">Governance</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Platform</h4>
            <ul>
              <li><a href="#platform">Overview</a></li>
              <li><a href="#quality">Quality &amp; Compliance</a></li>
              <li><a href="#partners">Supply chain</a></li>
              <li><a href="#platform">AI-enabled operations</a></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#newsroom">Newsroom</a></li>
              <li><a href="#medical-education">Medical Education</a></li>
              <li><a href="#">Sustainability Policy (PDF)</a></li>
              <li><a href="#">Code of Conduct (PDF)</a></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Imprint / Impressum</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Adverse Event Reporting</a></li>
              <li><a href="#">Whistleblower channel</a></li>
            </ul>
          </div>
        </div>

        <p className={styles.compliance}>
          Altanova Pharma Group AG operates under Swissmedic and Swiss narcotics-authority oversight. This website is intended for healthcare professionals, pharmacies, regulators and business partners. Information published here does not constitute medical advice, a recommendation to use any product, or promotion of medicinal products to the public. Prescribing decisions are the sole responsibility of the treating physician. Cannabinoid medicines referenced on the Altanova Medical Academy are dispensed exclusively on prescription through licensed Swiss pharmacies under medical supervision.
        </p>

        <div className={styles.footBar}>
          <span>© 2026 Altanova Pharma Group AG — All rights reserved. Confidential &amp; Proprietary.</span>
          <span>Web v2.0 · Next.js Edition</span>
        </div>
      </div>
    </footer>
  );
}
