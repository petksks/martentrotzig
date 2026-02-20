import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <div style={{ paddingTop: '6rem' }} />
      <section className="section">
        <div className="policy-content">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>
            Integritetspolicy
          </h1>
          <p><em>Senast uppdaterad: 2026-02-19</em></p>

          <h2>1. Personuppgiftsansvarig</h2>
          <p>
            <strong>Jenny &amp; Jans Restaurang AB</strong><br />
            Org.nr: 556670-7880<br />
            V&auml;sterl&aring;nggatan 79, 111 29 Stockholm<br />
            E-post: <a href="mailto:info@martentrotzig.se">info@martentrotzig.se</a><br />
            Telefon: <a href="tel:+4684422530">08-442 25 30</a>
          </p>

          <h2>2. Vilka uppgifter samlar vi in?</h2>
          <p>
            N&auml;r du kontaktar oss via kontaktformul&auml;ret p&aring; v&aring;r webbplats samlar vi
            in f&ouml;ljande personuppgifter:
          </p>
          <ul>
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer</li>
            <li>Meddelande</li>
          </ul>

          <h2>3. R&auml;ttslig grund</h2>
          <p>
            Vi behandlar dina personuppgifter baserat p&aring; ber&auml;ttigat intresse,
            f&ouml;r att fullg&ouml;ra ett avtal eller f&ouml;r att uppfylla en r&auml;ttslig
            f&ouml;rpliktelse.
          </p>

          <h2>4. Hur l&auml;nge sparar vi uppgifterna?</h2>
          <p>
            Vi sparar dina personuppgifter s&aring; l&auml;nge det &auml;r n&ouml;dv&auml;ndigt f&ouml;r att
            hantera ditt &auml;rende, samt under en begr&auml;nsad tid d&auml;refter f&ouml;r
            uppf&ouml;ljning. D&auml;rut&ouml;ver kan uppgifter sparas l&auml;ngre om det kr&auml;vs
            enligt lag.
          </p>

          <h2>5. Delning av uppgifter</h2>
          <p>
            Vi s&auml;ljer aldrig dina personuppgifter. Vi kan dela uppgifter med
            betrodda leverant&ouml;rer (t.ex. hosting- och e-posttj&auml;nster) som beh&ouml;ver
            dem f&ouml;r att utf&ouml;ra sina uppdrag &aring;t oss.
          </p>

          <h2>6. &Ouml;verf&ouml;ring utanf&ouml;r EU/EES</h2>
          <p>
            Om personuppgifter &ouml;verf&ouml;rs till l&auml;nder utanf&ouml;r EU/EES s&auml;kerst&auml;ller vi
            skyddet genom standardavtalsklausuler eller andra godk&auml;nda
            skyddsmekanismer.
          </p>

          <h2>7. Cookies</h2>
          <p>
            V&aring;r webbplats anv&auml;nder endast n&ouml;dv&auml;ndiga cookies. Vi anv&auml;nder inte
            Google Analytics eller andra sp&aring;rningsverktyg.
          </p>

          <h2>8. Dina r&auml;ttigheter</h2>
          <p>Du har r&auml;tt att:</p>
          <ul>
            <li>F&aring; tillg&aring;ng till dina personuppgifter</li>
            <li>Beg&auml;ra r&auml;ttelse av felaktiga uppgifter</li>
            <li>Beg&auml;ra radering av dina uppgifter</li>
            <li>Inv&auml;nda mot behandling</li>
            <li>Beg&auml;ra begr&auml;nsning av behandling</li>
            <li>Dataportabilitet</li>
          </ul>

          <h2>9. Kontakt och klagom&aring;l</h2>
          <p>
            Har du fr&aring;gor om v&aring;r personuppgiftsbehandling, kontakta oss p&aring;{' '}
            <a href="mailto:info@martentrotzig.se">info@martentrotzig.se</a>.
            Du har &auml;ven r&auml;tt att l&auml;mna klagom&aring;l till{' '}
            <strong>Integritetsskyddsmyndigheten (IMY)</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
