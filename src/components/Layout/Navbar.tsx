'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logoMain from '../../../public/Altanova-Logo-Main.png';

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
            <Link href="/hcp-portal">For Healthcare Professionals</Link>
            <Link href="/under-construction" title="Investor Relations subdomain available from Series A2">
              <span className={styles.utilPill}>Investor Relations</span>
            </Link>
          </div>
        </div>
      </div>

      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isHidden ? styles.navHidden : ''}`}>
        <div className={`wrap ${styles.navWrap}`}>
          <Link href="/" aria-label="Altanova Pharma">
            <Image
              src={logoMain}
              alt="Altanova Pharma Group AG"
              className={styles.logoImg}
              priority
            />
          </Link>

          <nav aria-label="Primary" className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
            <ul>
              <li><Link href="/company" onClick={() => setMenuOpen(false)}>Company</Link></li>
              <li><Link href="/cannexa" onClick={() => setMenuOpen(false)}>Cannexa</Link></li>
              <li><Link href="/quality-compliance" onClick={() => setMenuOpen(false)}>Quality &amp; Compliance</Link></li>
              <li><Link href="/education-resources" onClick={() => setMenuOpen(false)}>Education &amp; Resources</Link></li>
              <li><Link href="/partners" onClick={() => setMenuOpen(false)}>Partners</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
