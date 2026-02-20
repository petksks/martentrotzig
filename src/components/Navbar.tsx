'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const BOOKING_URL = 'https://www.thefork.se/restaurang/marten-trotzig-r58292#booking=';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="navbar-logo">
          <Logo />
        </Link>
        <ul className="navbar-links">
          <li><Link href="/meny">Meny</Link></li>
          <li><Link href="/rooms/chambre-separee">Chambre S&#233;par&#233;e</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
          <li><Link href="/om-oss">Om Oss</Link></li>
        </ul>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-book">
          Boka Bord
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Meny">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="St&auml;ng">
          &times;
        </button>
        <Link href="/meny" onClick={() => setMenuOpen(false)}>Meny</Link>
        <Link href="/rooms/chambre-separee" onClick={() => setMenuOpen(false)}>Chambre S&#233;par&#233;e</Link>
        <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        <Link href="/om-oss" onClick={() => setMenuOpen(false)}>Om Oss</Link>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-book">
          Boka Bord
        </a>
      </div>
    </>
  );
}
