'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background video */}
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="https://res.cloudinary.com/dvm7fjhxs/image/upload/v1781041568/hero-image-01_g2z0ce.png"
      >
        <source
          src="https://res.cloudinary.com/dvm7fjhxs/video/upload/v1781041584/minimalist_loop_animation_cljufh.mp4"
          type="video/mp4"
        />
      </video>
      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <span className={styles.heroLabel}>Swiss specialty pharma — Zug, Switzerland</span>

        <h1 className={styles.heroHeadline}>
          Bringing life-changing therapies to patients with chronic disease states
        </h1>

        <p className={styles.heroCopy}>
          Altanova Pharma Group AG is a Swiss-led specialty pharma platform focused on compliant sourcing, pharmaceutical-quality standards and medical-channel access across Switzerland and selected European markets.
        </p>

        <div className={styles.heroActions}>
          <Link className="btn btn-primary" href="/contact">Partnership inquiries <span className="arrow">→</span></Link>
          <Link className="btn btn-outline" href="/quality-compliance">Quality &amp; Compliance framework <span className="arrow">→</span></Link>
        </div>
      </div>
    </section>
  );
}
