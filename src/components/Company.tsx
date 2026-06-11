'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Company.module.css';

export default function Company() {
  const [bioExpanded, setBioExpanded] = useState(false);
  
  return (
    <div id="company">
      <section className={styles.bannerSection}>
        <div className="wrap">
          <span className={styles.sectionNum}>Company</span>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h2 className={styles.headline}>Swiss specialty pharma, built for the regulated medical channel.</h2>
            </div>
            <div className={styles.headerRight}>
              <p>
                Altanova Pharma Group AG was established as a Swiss specialty pharmaceutical platform — a quality and access layer built for therapeutic franchises in chronic disease care. Our launch franchise addresses a specific gap in European medicine: cannabinoid therapies sit between agricultural supply and pharmaceutical expectations, and the regulated medical channel has lacked a Swiss-quality access layer between the two.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="wrap">
          <div className={styles.split}>
            <div className={styles.col}>
            <span className={styles.colLabel}>Our mission</span>
            
            <div style={{ position: 'relative', width: '100%', height: '240px', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(10, 41, 82, 0.08)' }}>
              <Image
                src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781145648/Altanova-Hero-Image-06_dseot1.png"
                alt="Altanova Mission"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            <blockquote className={styles.blockquote}>
              Life-changing therapies for chronic disease states.
            </blockquote>
            <p>
              Altanova is quality-led, not grower-led. We operate exclusively in the regulated medical channel. We do not market to patients, we do not operate in the recreational market, and we do not maintain any consumer or wellness adjacencies anywhere in our corporate structure.
            </p>
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>How we operate</span>
            
            <div style={{ position: 'relative', width: '100%', height: '240px', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(10, 41, 82, 0.08)' }}>
              <Image
                src="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781145650/Altanova-Hero-Image-05_kteqo1.png"
                alt="Altanova Operations"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            <p>
              Altanova runs a Swissmedic-aligned quality system anchored by Responsible Person and Qualified Person functions; qualified EU-GMP supply relationships across multiple jurisdictions; and a specialty-pharma medical-channel infrastructure built for pharmacies, hospital formularies and physicians.
            </p>
            <p>
              Our work is institutional rather than promotional. Our governance is sized to the standard expected of a Swiss specialty pharmaceutical company preparing for institutional investment and, in time, a strategic exit to a specialty-pharma acquirer.
            </p>
            <a href="#leadership" className={styles.readMore}>Read about our leadership →</a>
          </div>
        </div>
        
        <div id="leadership" style={{ marginTop: '6rem', paddingTop: '5rem', borderTop: '1px solid var(--hairline)' }}>
          <span className={styles.sectionNum}>Leadership &amp; Governance</span>
          <h2 className={styles.headline} style={{ marginBottom: '3rem', maxWidth: '800px' }}>Institutional operating standards.</h2>
          
          <div className={styles.leaderRow}>
            <div className={styles.leaderPhoto}>
              <Image
                src="/Michael-Porter.png"
                alt="Michael Porter — Founder & Executive Chairman, Altanova Pharma Group AG"
                width={220}
                height={264}
                style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '10px', display: 'block', width: '100%', height: '100%' }}
              />
            </div>
            <div className={styles.leaderBio}>
              <h3 style={{ marginBottom: '0.25rem' }}>Michael Porter</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.8125rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Founder &amp; Executive Chairman, Altanova Pharma Group AG</p>
              <p>
                Michael Porter is Founder and Executive Chairman of Altanova Pharma Group AG and principal of MWP Family Office / PG Equity Group in Zug, Switzerland. He is an operator-investor with more than two decades of experience building, acquiring and scaling regulated healthcare, specialty pharmaceutical and life sciences platforms across the United States, Europe and international markets.
              </p>
              <p>
                Michael was previously Founder and Chief Executive Officer of Covis Pharma, a global specialty pharmaceutical company backed by Cerberus Capital Management &amp; Apollo Management. During his tenure, Covis completed 23 M&amp;A transactions, scaled into a top 10 global multi-country commercial platform selling into over 55 countries, executed three monetization events and distributed more than $1.5 billion in profit to investors.
              </p>
              
              {!bioExpanded && (
                <button onClick={() => setBioExpanded(true)} className="btn btn-outline" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                  Read full biography <span className="arrow">↓</span>
                </button>
              )}

              {bioExpanded && (
                <div className="anim-fade-in">
                  <p>
                    Michael currently serves on five MedTech board of directors and is actively involved across life sciences, medtech and specialty healthcare platforms. His work focuses on governance, capital formation, commercial strategy, M&amp;A, regulatory execution and building durable healthcare businesses with institutional operating standards.
                  </p>
                  <p>
                    At Altanova, Michael leads corporate strategy, capital formation, governance, platform architecture and strategic partnerships. His focus is to apply a specialty pharma operating model to cannabinoid-based medical products: compliant sourcing, pharmaceutical-quality standards, medical-channel access, disciplined regulatory execution and responsible commercialization in chronic disease areas where these therapies may have a role.
                  </p>
                  <p>
                    Michael’s commitment to Altanova is also personal. His conviction has been shaped by seeing, within his own family, the meaningful impact that cannabinoid-based treatments can have in chronic disease states, including cancer and a severely degenerative spinal cord condition, when approached responsibly and under appropriate medical supervision. That experience is a core driver behind Altanova’s mission: to bring pharmaceutical discipline, quality standards and responsible medical-channel access to a therapeutic area that remains underdeveloped in much of Europe.
                  </p>
                  <p>
                    Michael holds an MBA from Columbia Business School with a concentration in Finance and International Business.
                  </p>
                  <button onClick={() => setBioExpanded(false)} className="btn btn-outline" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                    Show less <span className="arrow">↑</span>
                  </button>
                </div>
              )}
              
              <div id="governance" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--off-white)', borderRadius: '8px', border: '1px solid var(--hairline)' }}>
                <h4 style={{ marginBottom: '1.5rem' }}>Governance Principles</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><span style={{ color: 'var(--blue-500)', marginRight: '0.5rem' }}>•</span> <b>Swiss board-level governance</b> with clear segregation of roles and institutional transparency.</li>
                  <li><span style={{ color: 'var(--blue-500)', marginRight: '0.5rem' }}>•</span> <b>Formally appointed management</b> and specialized advisors across relevant medical, regulatory, and supply domains.</li>
                  <li><span style={{ color: 'var(--blue-500)', marginRight: '0.5rem' }}>•</span> <b>Quality and regulatory systems oversight</b> anchored by non-delegable Responsible Person and Qualified Person functions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
