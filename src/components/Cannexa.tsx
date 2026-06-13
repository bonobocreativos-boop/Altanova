import Link from 'next/link';
import Image from 'next/image';
import styles from './Cannexa.module.css';

export default function Cannexa() {
  return (
    <section className={styles.cannexa}>
      <div className={styles.bannerSection}>
        <div className="wrap">
          <div className={styles.header}>
            <span className={styles.sectionNum}>Cannexa Franchise</span>
            <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781385724/Cannexa-Logo-01_ym0qj5.png" alt="Cannexa Logo" width={280} height={90} style={{ objectFit: 'contain', margin: '1rem 0 2rem' }} priority />
            <h1 className="visually-hidden" style={{ display: 'none' }}>Cannexa</h1>
            <p className={styles.introText}>
              Cannexa is the cannabinoid-based medical products franchise of Altanova Pharma Group AG, focused on regulated medical-channel access, compliant sourcing and pharmaceutical-quality standards for chronic disease areas where cannabinoid-based therapies may have a role.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.proofBar}>
        <div className={`wrap ${styles.proofGrid}`}>
          <div className={styles.proofItem}>
            <svg className={styles.proofIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            <div>
              <span className={styles.proofLabel}>Quality standards</span>
              <p className={styles.proofValue}>EU-GMP supplier qualification and full batch traceability.</p>
            </div>
          </div>

          <div className={styles.proofItem}>
            <svg className={styles.proofIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            <div>
              <span className={styles.proofLabel}>Medical channel</span>
              <p className={styles.proofValue}>Exclusive distribution via licensed pharmacies.</p>
            </div>
          </div>

          <div className={styles.proofItem}>
            <svg className={styles.proofIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <div>
              <span className={styles.proofLabel}>Safety monitoring</span>
              <p className={styles.proofValue}>Active pharmacovigilance and ElViS integration.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className={styles.diseaseSection} style={{ marginTop: '2rem', borderTop: 'none', paddingTop: 0 }}>
          <h3 className={styles.sidebarTitle}>Chronic Disease Areas</h3>
          <div className={styles.diseaseGrid}>
            <div className={styles.diseaseCard}>
              <span className={styles.diseaseName}>
                <span>Chronic</span>
                <span>Pain</span>
                <span>Management</span>
              </span>
              <div className={styles.diseaseImageContainer}>
                <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781310024/Cannexa-Hero-Image-05_xjxsb0.png" alt="Chronic Pain Management" fill className={styles.diseaseImage} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.diseaseCard}>
              <span className={styles.diseaseName}>
                <span>Neurology</span>
                <span>/</span>
                <span>MS</span>
                <span>Spasticity</span>
              </span>
              <div className={styles.diseaseImageContainer}>
                <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781310024/Cannexa-Hero-Image-03_e7jxtr.png" alt="Neurology / MS Spasticity" fill className={styles.diseaseImage} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.diseaseCard}>
              <span className={styles.diseaseName}>
                <span>Oncology</span>
                <span>Supportive</span>
                <span>Care</span>
              </span>
              <div className={styles.diseaseImageContainer}>
                <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781310024/Cannexa-Hero-Image-04_mlmhe1.png" alt="Oncology Supportive Care" fill className={styles.diseaseImage} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.diseaseCard}>
              <span className={styles.diseaseName}>
                <span>Palliative</span>
                <span>Care</span>
              </span>
              <div className={styles.diseaseImageContainer}>
                <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781310024/Cannexa-Hero-Image-02_wybwpj.png" alt="Palliative Care" fill className={styles.diseaseImage} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
          
          <Link href="/quality-compliance" className="btn btn-outline">
            Review our Quality &amp; Compliance framework <span className="arrow">→</span>
          </Link>
        </div>

        <div className={styles.grid} style={{ marginTop: '4rem', borderTop: '1px solid var(--hairline)', paddingTop: '4rem' }}>

          <div className={styles.storeSection}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--ink)' }}>Formulation Portfolio</h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '0.9375rem' }}>
              The Cannexa product range is manufactured under EU-GMP standards and dispensed strictly on medical prescription. Product availability is subject to Swissmedic and cantonal authorisations.
              <br/><br/>
              <em>* Note: The product images displayed below are design concepts.</em>
            </p>

            <div className={styles.storeGrid}>
              <article className={styles.productCard}>
                <div className={styles.productImagePlaceholder}>
                  <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781385753/Cannexa-Product1_my7mjs.png" alt="Cannexa T10:C10" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className={styles.productTag}>This is a product concept</span>
                <h3 className={styles.productName}>Cannexa T10:C10</h3>
                <p className={styles.productDesc}>Standardised oral solution. Balanced THC to CBD ratio formulated for consistent dosing.</p>
                <div className={styles.productSpecs}>
                  <span><b>Formulation:</b> Oral solution (30ml)</span>
                  <span><b>Concentration:</b> 10mg/ml THC, 10mg/ml CBD</span>
                  <span><b>Origin:</b> EU-GMP Certified</span>
                </div>
                <button className={`btn btn-primary ${styles.btnDisabled}`} disabled>
                  Purchase Inquiry
                </button>
              </article>

              <article className={styles.productCard}>
                <div className={styles.productImagePlaceholder}>
                  <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781385754/Cannexa-Product2_ph3i8w.png" alt="Cannexa C100" fill style={{ objectFit: 'cover' }} />
                </div>
                <span className={styles.productTag}>This is a product concept</span>
                <h3 className={styles.productName}>Cannexa C100</h3>
                <p className={styles.productDesc}>Standardised hard capsules. High CBD profile designed for prolonged clinical effect without psychotropic activity.</p>
                <div className={styles.productSpecs}>
                  <span><b>Formulation:</b> Capsules (30 per pack)</span>
                  <span><b>Concentration:</b> 100mg CBD per capsule</span>
                  <span><b>Origin:</b> EU-GMP Certified</span>
                </div>
                <button className={`btn btn-primary ${styles.btnDisabled}`} disabled>
                  Purchase Inquiry
                </button>
              </article>

              <article className={styles.productCard}>
                <div className={styles.productImagePlaceholder}>
                  <Image src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781385754/Cannexa-Product3_evljsr.png" alt="Cannexa C50" fill style={{ objectFit: 'cover' }} />
                </div>
                <span className={styles.productTag}>This is a product concept</span>
                <h3 className={styles.productName}>Cannexa C50</h3>
                <p className={styles.productDesc}>Standardised hard capsules. Medium CBD profile for sustained relief.</p>
                <div className={styles.productSpecs}>
                  <span><b>Formulation:</b> Capsules (30 per pack)</span>
                  <span><b>Concentration:</b> 50mg CBD per capsule</span>
                  <span><b>Origin:</b> EU-GMP Certified</span>
                </div>
                <button className={`btn btn-primary ${styles.btnDisabled}`} disabled>
                  Purchase Inquiry
                </button>
              </article>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
