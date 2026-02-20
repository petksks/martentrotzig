import type { Metadata } from 'next';

const PREFIX = '/martentrotzig';

export const metadata: Metadata = {
  title: 'Kontakta Oss',
  description: 'Kontakta Mårten Trotzig för bokningar och frågor. Ring 08-442 25 30 eller maila booking@martentrotzig.se. Västerlånggatan 79, Gamla Stan.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-bg">
          <img src={`${PREFIX}/images/DSC00552.jpg`} alt="Kungliga matsalen" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Kontakta oss</h1>
          <p>
            Har ni fr&aring;gor inf&ouml;r ert bes&ouml;k, funderingar kring menyn eller vill ni boka
            n&aring;gon av v&aring;ra festv&aring;ningar? Fyll i formul&auml;ret nedan s&aring; hj&auml;lper vi er
            s&aring; snart vi kan.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <form className="contact-form" name="contact" method="POST">
              <input type="text" name="name" placeholder="Namn" required />
              <input type="tel" name="phone" placeholder="Telefon" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Skriv ditt meddelande h&auml;r..." rows={5} required />
              <label className="checkbox-row">
                <input type="checkbox" name="terms" required />
                Jag accepterar villkoren
              </label>
              <button type="submit" className="btn-submit">Skicka</button>
            </form>

            <div className="contact-info-section">
              <div>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
                <h4>E-post</h4>
                <p>F&ouml;r bokningsf&ouml;rfr&aring;gningar och allm&auml;nna fr&aring;gor.</p>
                <a className="contact-value" href="mailto:booking@martentrotzig.se">booking@martentrotzig.se</a>
              </div>

              <div>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <h4>Telefon</h4>
                <p>Ring oss g&auml;rna under v&aring;ra &ouml;ppetider f&ouml;r snabb service.</p>
                <a className="contact-value" href="tel:+4684422530">08-442 25 30</a>
              </div>

              <div>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h4>Adress</h4>
                <p>Varm v&auml;lkomna till oss i hj&auml;rtat av Gamla Stan.</p>
                <a className="contact-value" href="https://maps.app.goo.gl/7YQR68EE8SzCU9DeA" target="_blank" rel="noopener noreferrer">
                  V&auml;sterl&aring;nggatan 79, Stockholm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
