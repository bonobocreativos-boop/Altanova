'use client';
import { useState } from 'react';
import styles from './MedicalEducation.module.css';

export default function MedicalEducation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hcp} id="medical-education">
        <div className={`wrap ${styles.hcpGrid}`}>
          <div className={styles.hcpMain}>
            <span className={styles.sectionNum}>06 — Medical &amp; Scientific Education</span>
            <h2 className={styles.headline}>An evidence-led education resource for healthcare professionals.</h2>
            <p>
              The Altanova Medical Academy is a Swiss continuing-medical-education resource for healthcare professionals. Modules cover cannabinoid pharmacology, the published clinical-evidence base by indication, drug-interaction profiles and patient-selection considerations.
            </p>
            <p>
              Access is restricted to verified healthcare professionals under Swiss and EU pharmaceutical advertising regulations.
            </p>
            <button className="btn btn-primary" onClick={() => setModalOpen(true)} style={{ marginTop: '1.5rem' }}>
              Enter the medical-education area <span className="arrow">→</span>
            </button>
          </div>

          <aside className={styles.hcpAside}>
            <span className={styles.asideLabel}>Inside the HCP gate</span>
            <ul className={styles.hcpList}>
              <li>
                <span className={styles.bullet}>●</span>
                <span><b>Altanova Medical Academy</b> — CME-accredited modules in DE and EN. FR added in Phase 2.</span>
              </li>
              <li>
                <span className={styles.bullet}>●</span>
                <span><b>Evidence Library</b> — curated peer-reviewed references by indication.</span>
              </li>
              <li>
                <span className={styles.bullet}>●</span>
                <span><b>Therapy-area briefings</b> — chronic pain, MS spasticity, palliative care, oncology supportive.</span>
              </li>
              <li>
                <span className={styles.bullet}>●</span>
                <span><b>Scientific Advisory Board</b> — Swiss and European specialists, with affiliations.</span>
              </li>
            </ul>
            <p className={styles.disclaimer}>
              No statement on the Altanova Medical Academy constitutes a medical claim, an efficacy claim, a dosage recommendation, or a representation that any Altanova product cures, treats, prevents or alleviates any disease. Prescribing decisions remain the sole responsibility of the treating physician.
            </p>
          </aside>
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
              <button className="btn btn-primary" onClick={() => alert('Demo only — connect to actual portal')}>I confirm I am an HCP</button>
              <button className="btn btn-outline" onClick={() => setModalOpen(false)}>I am not an HCP</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
