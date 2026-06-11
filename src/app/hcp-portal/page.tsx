import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Healthcare Professionals | Altanova Pharma',
  description: 'Evidence-led continuing-medical-education resource for healthcare professionals exploring cannabinoid pharmacology.',
};

export default function HcpPortal() {
  return (
    <div style={{
      minHeight: '70vh',
      padding: 'clamp(104px, 12vw, 160px) clamp(1.5rem, 5vw, 4rem) 4rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
        color: 'var(--ink)', 
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        fontWeight: '300'
      }}>
        Altanova Medical Academy
      </h1>
      
      <p style={{ 
        fontSize: '1.125rem', 
        color: 'var(--charcoal)', 
        lineHeight: '1.7', 
        maxWidth: '800px',
        marginBottom: '2rem'
      }}>
        The Altanova Medical Academy is a continuing-medical-education resource for verified healthcare professionals. Access is restricted under Swiss and EU pharmaceutical regulations to ensure that complex medical information regarding cannabinoid pharmacology and clinical evidence reaches the right audience.
      </p>

      <div style={{
        background: 'var(--blue-50)',
        padding: '2.5rem',
        borderRadius: '12px',
        border: '1px solid var(--blue-200)',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--blue-900)', fontWeight: '500' }}>
          Secure HCP Portal Login
        </h2>
        <p style={{ color: 'var(--blue-800)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Please log in with your credentials to access modules covering cannabinoid pharmacology, clinical-evidence base by indication, drug-interaction profiles, and patient-selection considerations.
        </p>
        
        {/* Mock Login Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--blue-900)' }}>Professional Email or ID</label>
            <input type="text" placeholder="Enter your registered ID" style={{
              width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--blue-200)', outline: 'none'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--blue-900)' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{
              width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--blue-200)', outline: 'none'
            }} />
          </div>
          <button className="btn btn-primary" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
            Secure Login <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', maxWidth: '800px' }}>
        By logging in, you certify that you are a healthcare professional registered with the Swiss Medical Association (FMH), pharmaSuisse or an equivalent professional body.
      </p>
    </div>
  );
}
