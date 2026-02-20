import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om Oss – Mårten Trotzig Restaurant i Gamla Stan',
  description: 'Upptäck Mårten Trotzigs historia i hjärtat av Gamla Stan. Svensk matkultur med lokala råvaror i historisk miljö. Boka bord idag!',
};

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-bg">
          <img src="/images/DSC00447.webp" alt="Mårten Trotzig interiör" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Om oss</h1>
        </div>
      </section>

      {/* Historia & Arv */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="two-col-text">
              <h2>Historia &amp; Arv</h2>
            </div>
            <div className="two-col-text">
              <p>
                Ni hittar oss i hj&auml;rtat av Gamla stan. Vi &auml;r uppkallade efter den
                legendariske 1500-talsk&ouml;pmannen som &auml;ven gav sitt namn till stadens
                smalaste gr&auml;nd. V&aring;r restaurang ligger i en historisk byggnad d&auml;r
                medeltida charm m&ouml;ter modern elegans och erbjuder en upplevelse
                som k&auml;nns som en resa genom tiden.
              </p>
            </div>
          </div>
          <img
            className="about-image"
            src="/images/DSC00030.webp"
            alt="Mårten Trotzig restaurang utifrån"
            loading="lazy"
          />
        </div>
      </section>

      {/* Vår Matfilosofi */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="two-col-text">
              <h2>V&aring;r Matfilosofi</h2>
              <p>
                Vi s&auml;tter en &auml;ra i att v&auml;rna om det svenska matarvet samtidigt som vi
                v&auml;lkomnar moderna smaker. V&aring;r meny tar avstamp i h&ouml;gkvalitativa
                r&aring;varor i s&auml;song som vi h&auml;mtar fr&aring;n lokala producenter. Fr&aring;n klassiska
                nordiska fisk- och skaldjursr&auml;tter till v&auml;llagade k&ouml;ttr&auml;tter &auml;r varje tallrik
                komponerad f&ouml;r att lyfta fram det allra b&auml;sta inom skandinavisk
                gastronomi.
              </p>
              <div className="contact-row">
                <span>Ring oss p&aring;</span>
                <a href="tel:+4684422530">&#9742; 08-442 2530</a>
                <Link href="/meny">&#9776; Menyf&ouml;rslag</Link>
              </div>
            </div>
            <img src="/images/DSC00378-HDR.webp" alt="Dessert" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Atmosfären */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <img src="/images/DSC00582.webp" alt="Restaurang atmosfär" loading="lazy" />
            <div className="two-col-text">
              <h2>Atmosf&auml;ren</h2>
              <p>
                Med v&aring;ra vackra valv och historiska stenv&auml;ggar erbjuder vi en unik
                milj&ouml; f&ouml;r alla tillf&auml;llen. Oavsett om ni bes&ouml;ker oss f&ouml;r en romantisk
                middag, en aff&auml;rslunch eller ett privat firande i v&aring;ra eleganta
                festv&aring;ningar bjuder vi p&aring; en varm och sofistikerad atmosf&auml;r som
                f&aring;ngar Stockholms sj&auml;l.
              </p>
              <div className="contact-row">
                <span>Ring oss p&aring;</span>
                <a href="tel:+4684422530">&#9742; 08-442 2530</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
