import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import logoWhite from '../../../public/Altanova Vector Logo-white.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <Link href="/" aria-label="Altanova Pharma">
              <Image
                src={logoWhite}
                alt="Altanova Pharma Group AG"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandTagline}>
              Swiss Precision<span className={styles.dot}>·</span>Scientific Integrity<span className={styles.dot}>·</span>Patient Impact
            </p>
            <p className={styles.footAddr}>
              Altanova Pharma Group AG<br />
              Rigistrasse 3<br />
              6300 Zug<br />
              Switzerland<br />
              <a href="mailto:mkapp@altanovapharma.com">mkapp@altanovapharma.com</a>
            </p>
          </div>

          <div className={styles.footCol}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About</Link></li>
              <li><Link href="/company#leadership">Leadership</Link></li>
              <li><Link href="/company#governance">Governance</Link></li>
              <li><Link href="/company#careers">Careers</Link></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/quality-compliance">Quality &amp; Compliance</Link></li>
              <li><Link href="/partners">Supply chain</Link></li>
              <li><Link href="/">AI-enabled operations</Link></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/under-construction">News &amp; Updates</Link></li>
              <li><Link href="/education-resources">Education &amp; Resources</Link></li>
              <li><Link href="/under-construction">Sustainability Policy (PDF)</Link></li>
              <li><Link href="/under-construction">Code of Conduct (PDF)</Link></li>
            </ul>
          </div>
          <div className={styles.footCol}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/under-construction">Imprint / Impressum</Link></li>
              <li><Link href="/under-construction">Privacy Policy</Link></li>
              <li><Link href="/under-construction">Cookie Policy</Link></li>
              <li><Link href="/under-construction">Terms of Use</Link></li>
              <li><Link href="/under-construction">Adverse Event Reporting</Link></li>
              <li><Link href="/under-construction">Whistleblower channel</Link></li>
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
