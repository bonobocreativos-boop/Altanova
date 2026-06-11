'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MedicalEducation.module.css';

export default function MedicalEducation() {
  const [modalOpen, setModalOpen] = useState(false);

  // Manage body class for layout without footer scroll on desktop
  useEffect(() => {
    document.body.classList.add('no-footer-page');
    return () => {
      document.body.classList.remove('no-footer-page');
    };
  }, []);

  return (
    <>
      <section className={styles.splitSection}>
        {/* Left Column: Healthcare Professionals */}
        <div className={`${styles.column} ${styles.hcpColumn}`}>
          <div className={styles.columnBg} />
          <div className={styles.overlay} />
          
          <div className={styles.card}>
            <span className={styles.tag}>Healthcare Professionals</span>
            <h2 className={styles.title}>An evidence-led education resource.</h2>
            
            <p className={styles.desc}>
              The Altanova Medical Academy is a Swiss continuing-medical-education resource for healthcare professionals. Modules cover cannabinoid pharmacology, the published clinical-evidence base by indication, drug-interaction profiles and patient-selection considerations.
            </p>
            
            <p className={styles.desc} style={{ fontSize: '0.8125rem', color: 'var(--muted)', margin: '0 0 1.5rem 0', textTransform: 'none' }}>
              Access is restricted to verified healthcare professionals under Swiss and EU pharmaceutical regulations.
            </p>
            
            <button className="btn btn-primary" onClick={() => setModalOpen(true)} style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              Enter the Medical Academy <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Patient Resources */}
        <div className={`${styles.column} ${styles.patientColumn}`}>
          <div className={styles.columnBg} />
          <div className={styles.overlay} />
          
          <div className={styles.card}>
            <span className={styles.tag}>Patients</span>
            <h2 className={styles.title}>Patient Resources.</h2>
            
            <p className={styles.desc}>
              Altanova Pharma provides safety-oriented, non-promotional resources for patients exploring cannabinoid-based therapies under medical supervision. We believe in empowering patients with objective, regulatory-aligned information.
            </p>
            
            <p className={styles.desc} style={{ fontSize: '0.8125rem', color: 'var(--muted)', margin: '0 0 1.5rem 0', textTransform: 'none' }}>
              Please note that Altanova does not provide direct medical advice, dosage recommendations or product promises.
            </p>
            
            <Link href="/patient-portal" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem', display: 'inline-block' }}>
              Access Patient Resources <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className={styles.modalBg} role="dialog" aria-modal="true" aria-labelledby="hcpTitle" onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h4>Healthcare-professional confirmation</h4>
            <h3 id="hcpTitle">This area is restricted to verified healthcare professionals.</h3>
            <p>The information contained in this section is intended exclusively for healthcare professionals registered in Switzerland or an equivalent jurisdiction. It is not intended to replace the advice of a treating physician.</p>
            <p>By confirming below, you certify that you are a healthcare professional registered with the Swiss Medical Association (FMH), pharmaSuisse or an equivalent professional body.</p>
            <div className={styles.modalActions}>
              <Link href="/hcp-portal" className="btn btn-primary" onClick={() => setModalOpen(false)}>I confirm I am an HCP</Link>
              <button className="btn btn-outline" onClick={() => setModalOpen(false)}>I am not an HCP</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
