import React from 'react';
import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--ink)' }}>Page Under Construction</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2rem' }}>
        We are working hard to bring you this content. Please check back later.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home <span className="arrow">→</span>
      </Link>
    </div>
  );
}
