'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logoBlack from '../../../public/Altanova-logo-black.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      if (goingDown && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(y > 20);
      lastY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show header when menu is open
  const isHidden = hidden && !menuOpen;

  return (
    <>
      <div className={`${styles.utility} ${isHidden ? styles.utilityHidden : ''}`}>
        <div className={`wrap ${styles.utilityInner}`}>
          <div className={styles.lang} aria-label="Language">
            <span className={styles.active}>EN</span>
            <span>DE</span>
            <span>FR</span>
            <span>IT</span>
          </div>
          <div className={styles.utilRight}>
            <a href="#medical-education">For Healthcare Professionals</a>
            <a href="#" title="Investor Relations subdomain available from Series A2">
              <span className={styles.utilPill}>Investor Relations</span>
            </a>
          </div>
        </div>
      </div>

      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isHidden ? styles.navHidden : ''}`}>
        <div className={`wrap ${styles.navWrap}`}>
          <a href="#" aria-label="Altanova Pharma">
            <Image
              src={logoBlack}
              alt="Altanova Pharma Group AG"
              className={styles.logoImg}
              priority
            />
          </a>

          <nav aria-label="Primary" className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
            <ul>
              <li><a href="#company" onClick={() => setMenuOpen(false)}>Company</a></li>
              <li><a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a></li>
              <li><a href="#quality" onClick={() => setMenuOpen(false)}>Quality &amp; Compliance</a></li>
              <li><a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a></li>
              <li><a href="#medical-education" onClick={() => setMenuOpen(false)}>Medical Education</a></li>
              <li><a href="#newsroom" onClick={() => setMenuOpen(false)}>Newsroom</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <button className={styles.menuBtn} aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  );
}
