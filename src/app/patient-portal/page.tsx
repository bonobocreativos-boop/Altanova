import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Patient Resources | Altanova Pharma',
  description: 'Safety-oriented, non-promotional resources for patients exploring cannabinoid-based therapies under medical supervision.',
};

export default function PatientPortal() {
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
        Patient Resources
      </h1>
      
      <p style={{ 
        fontSize: '1.125rem', 
        color: 'var(--charcoal)', 
        lineHeight: '1.7', 
        maxWidth: '800px',
        marginBottom: '2rem'
      }}>
        Altanova Pharma provides safety-oriented, non-promotional resources for patients exploring cannabinoid-based therapies under medical supervision. We believe in empowering patients with objective, regulatory-aligned information.
      </p>

      <div style={{
        background: 'var(--off-white)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--hairline)',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--ink)', fontWeight: '400' }}>
          Portal Access Pending
        </h2>
        <p style={{ color: 'var(--mid)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          The full patient resources portal is currently under development. Please check back later for detailed guides, safety information, and FAQs regarding our therapies.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Home <span className="arrow">→</span>
        </Link>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', fontStyle: 'italic', maxWidth: '800px' }}>
        Please note that Altanova does not provide direct medical advice, dosage recommendations, or product promises. Always consult with your treating physician.
      </p>
    </div>
  );
}
