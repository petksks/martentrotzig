import Link from 'next/link';
import Logo from './Logo';

const BOOKING_URL = 'https://www.thefork.se/restaurang/marten-trotzig-r58292#booking=';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-contact">
          <div>
            <h4>Telefon</h4>
            <a href="tel:+4684422530">08-442 25 30</a>
          </div>
          <div>
            <h4>Email</h4>
            <a href="mailto:bokning@martentrotzig.se">bokning@martentrotzig.se</a>
          </div>
          <div>
            <h4>Adress</h4>
            <a href="https://maps.app.goo.gl/7YQR68EE8SzCU9DeA" target="_blank" rel="noopener noreferrer">
              V&auml;sterl&aring;nggatan 79, Stockholm
            </a>
          </div>
        </div>

        <div className="footer-center">
          <Link href="/">
            <Logo className="footer-logo" />
          </Link>
          <a
            href="https://www.instagram.com/martentrotzig/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Boka Bord
          </a>
        </div>

        <div className="footer-hours">
          <dl className="footer-hours-grid">
            <dt>S&ouml;ndag</dt><dd>11:00-23:00</dd>
            <dt>L&ouml;rdag</dt><dd>11:00-24:00</dd>
            <dt>Fredag</dt><dd>12:00-01:00</dd>
            <dt>Torsdag</dt><dd>17:00-23:00</dd>
            <dt>Onsdag</dt><dd>17:00-23:00</dd>
            <dt>Tisdag</dt><dd>17:00-23:00</dd>
            <dt>M&aring;ndag</dt><dd>17:00-23:00</dd>
          </dl>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026. Alla r&auml;ttigheter f&ouml;rbeh&aring;llna.</span>
        <Link href="/integritetspolicy">Integritetspolicy</Link>
      </div>
    </footer>
  );
}
