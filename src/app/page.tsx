import Link from 'next/link';

const PREFIX = '/martentrotzig';
const BOOKING_URL = 'https://www.thefork.se/restaurang/marten-trotzig-r58292#booking=';

const galleryRow1 = [
  'DSC00126.webp', 'DSC00170.webp', 'DSC00201.webp',
  'DSC00209.webp', 'DSC00218.webp', 'DSC00248.webp',
];
const galleryRow2 = [
  'DSC00264.webp', 'DSC00281.webp', 'DSC00292.webp',
  'DSC00298.webp', 'DSC00352-HDR.webp', 'DSC00206.webp',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src={`${PREFIX}/images/DSC00020-1.webp`} alt="Restaurang M&#229;rten Trotzig interi&#246;r" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Anrik Restaurang &amp; Bar i Gamla Stan</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <h2>M&Aring;RTEN TROTZIG</h2>
        <p>
          Upplev en av Gamla Stans mest anrika restauranger. Vi erbjuder v&auml;llagad svensk mat och
          unika lokaler f&ouml;r alla tillf&auml;llen fr&aring;n s&auml;llskap i chambre s&eacute;par&eacute;e till eleganta middagar.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Boka Bord
        </a>
      </section>

      {/* Food Gallery */}
      <section className="gallery-section">
        <div className="gallery-row">
          {[...galleryRow1, ...galleryRow1].map((img, i) => (
            <img key={`r1-${i}`} src={`${PREFIX}/images/${img}`} alt="Mat fr&#229;n M&#229;rten Trotzig" loading="lazy" />
          ))}
        </div>
        <div className="gallery-row reverse" style={{ marginTop: '0.5rem' }}>
          {[...galleryRow2, ...galleryRow2].map((img, i) => (
            <img key={`r2-${i}`} src={`${PREFIX}/images/${img}`} alt="Mat fr&#229;n M&#229;rten Trotzig" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Grupper & Evenemang */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <img src={`${PREFIX}/images/DSC00552.jpg`} alt="Kungliga matsalen" loading="lazy" />
            <div className="two-col-text">
              <h2>Grupper &amp; Evenemang</h2>
              <p>
                Upplev en middag i historiens vingslag. F&ouml;r st&ouml;rre s&auml;llskap och firanden
                erbjuder vi v&aring;ra unika rum Kungliga matsalen och Chambre s&eacute;par&eacute;e
                som ligger i vackra medeltida valv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Våra Menyer */}
      <section className="three-col-cta">
        <img className="side-img" src={`${PREFIX}/images/DSC00264.webp`} alt="Mat" loading="lazy" />
        <div className="center-content">
          <h2>V&aring;ra Menyer</h2>
          <p>
            Upplev smakerna av svensk matkultur n&auml;r den &auml;r som b&auml;st. Fr&aring;n v&aring;ra
            &auml;lskade k&ouml;ttbullar till s&auml;songens finaste delikatesser, allt lagat med
            k&auml;rlek och omsorg
          </p>
          <Link href="/meny" className="btn-outline">A La Carte</Link>
        </div>
        <img className="side-img" src={`${PREFIX}/images/DSC00352-HDR.webp`} alt="K&#246;ttbullar" loading="lazy" />
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="hero-bg">
          <img src={`${PREFIX}/images/DSC00497.webp`} alt="Restaurang interi&#246;r" loading="lazy" />
        </div>
        <div className="hero-overlay" />
        <div className="cta-banner-content">
          <h2>Svenska Klassiker i Historisk Milj&ouml;</h2>
          <p>
            V&auml;lkommen till en anrik svensk restaurang i hj&auml;rtat av Gamla Stan.
            H&auml;r serverar vi klassiska r&auml;tter som hemgjorda k&ouml;ttbullar och
            Wallenbergare i en historisk milj&ouml;. Boka bord f&ouml;r en of&ouml;rgl&ouml;mlig
            middag eller abonnera v&aring;r chambre s&eacute;par&eacute;e f&ouml;r en helt privat matsal.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-outline white">
            Boka Bord
          </a>
        </div>
      </section>
    </>
  );
}
