'use client';
import { useRef, useEffect } from 'react';
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
          Swiss specialty pharma.<br />Life-changing therapies for chronic disease states.
        </h1>

        <p className={styles.heroCopy}>
          Altanova Pharma Group AG is a Swiss specialty pharmaceutical platform building the regulated access layer for specialty therapies. We work to Swissmedic and EU-GMP standards across Switzerland and selected European markets.
        </p>

        <div className={styles.heroActions}>
          <a className="btn btn-primary" href="#contact">Partnership inquiries <span className="arrow">→</span></a>
          <a className="btn btn-outline" href="#quality">Quality &amp; Compliance framework <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}
