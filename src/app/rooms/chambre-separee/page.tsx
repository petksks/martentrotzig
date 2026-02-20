'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

const PREFIX = '/martentrotzig';
const BOOKING_URL = 'https://www.thefork.se/restaurang/marten-trotzig-r58292#booking=';

const slides = [
  { name: 'Kungliga matsalen', image: `${PREFIX}/images/DSC00552.jpg` },
  { name: 'Festvåning', image: `${PREFIX}/images/squoosh-matsalen-med-vita-tapeter.jpg` },
  { name: 'Vinterträdgård', image: `${PREFIX}/images/DSC00422.webp` },
  { name: '1600-tals Valv', image: `${PREFIX}/images/DSC00437.webp` },
  { name: 'Matsal', image: `${PREFIX}/images/DSC00582.webp` },
  { name: "Trotzig's Bar", image: `${PREFIX}/images/DSC00497.webp` },
];

const rooms = [
  {
    name: 'Kungliga matsalen',
    image: `${PREFIX}/images/DSC00552.jpg`,
    desc: 'För exklusiva middagar och firanden i en anrik och elegant miljö. En oförglömlig upplevelse väntar. Max 20 personer.',
  },
  {
    name: 'Festvåning',
    image: `${PREFIX}/images/squoosh-matsalen-med-vita-tapeter.jpg`,
    desc: 'Planera er nästa fest eller event i vår stämningsfulla festvåning med anor från medeltiden. Max 35 personer.',
  },
  {
    name: 'Vinterträdgård',
    image: `${PREFIX}/images/DSC00422.webp`,
    desc: 'I vår ljusa Vinterträdgård äter ni gott under vackra stenvalv. En rofylld och unik oas året runt.',
  },
  {
    name: '1600-tals Valv',
    image: `${PREFIX}/images/DSC00437.webp`,
    desc: 'Upplev historiens vingslag i vårt unika 1600-tals valv. En intim miljö för en oförglömlig kväll i stockholms mest unika chambre séparée. Max 26 personer.',
  },
  {
    name: 'Det Vita Valvet',
    image: `${PREFIX}/images/DSC00447.webp`,
    desc: 'Njut av en middag i vår mysiga matsal. De vitkalkade väggarna och rustika känslan skapar en varm miljö. Max 10 personer.',
  },
  {
    name: "Trotzig's Bar",
    image: `${PREFIX}/images/DSC00497.webp`,
    desc: 'Koppla av med en god drink i vår genuina bar. Den självklara och livfulla mötesplatsen i Gamla Stan.',
  },
];

export default function ChambreSepareePage() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);

  return (
    <>
      {/* Intro */}
      <section className="rooms-intro">
        <h2>CHAMBRE S&Eacute;PAR&Eacute;E</h2>
        <p>
          F&ouml;r er som &ouml;nskar en mer privat upplevelse erbjuder vi Chambre S&eacute;par&eacute;e
          i de flesta av v&aring;ra unika rum. F&ouml;r en extra minnesv&auml;rd tillst&auml;llning
          rekommenderar vi s&auml;rskilt v&aring;r eleganta Kungliga matsal eller den anrika
          atmosf&auml;ren i ett av v&aring;ra valv.
        </p>
        <a href="tel:+4684422530" className="btn-outline">
          &#9742; Ring +46 8 442 25 30 f&ouml;r bokning.
        </a>
      </section>

      {/* Room Slider */}
      <section className="room-slider">
        {slides.map((slide, i) => (
          <div key={slide.name} className={`room-slide${i === current ? ' active' : ''}`}>
            <img src={slide.image} alt={slide.name} />
            <div className="room-slide-overlay">
              <h2>{slide.name}</h2>
            </div>
          </div>
        ))}
        <div className="slider-arrows">
          <button className="slider-arrow" onClick={prev} aria-label="Föregående">&#8592;</button>
          <button className="slider-arrow" onClick={next} aria-label="Nästa">&#8594;</button>
        </div>
      </section>

      {/* Discover Rooms */}
      <section className="section">
        <div className="container text-center" style={{ marginBottom: '3rem' }}>
          <h2>Uppt&auml;ck andra rum</h2>
          <p style={{ maxWidth: 500, margin: '0 auto' }}>
            Hitta den perfekta milj&ouml;n f&ouml;r just ert s&auml;llskap och tillf&auml;lle.
          </p>
        </div>
        <div className="container">
          <div className="rooms-grid">
            {rooms.map(room => (
              <div key={room.name} className="room-card">
                <div style={{ overflow: 'hidden' }}>
                  <img src={room.image} alt={room.name} loading="lazy" />
                </div>
                <div className="room-card-body">
                  <h3>{room.name}</h3>
                  <p>{room.desc}</p>
                  <Link href="/kontakt">Skicka f&ouml;rfr&aring;gan</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="booking-inquiry">
        <h2>Skicka bokningsf&ouml;rfr&aring;gan</h2>
        <p>
          S&auml;kra er plats i en av Gamla Stans mest st&auml;mningsfulla milj&ouml;er.
          Genom att skicka en f&ouml;rfr&aring;gan kan vi f&ouml;rbereda det perfekta rummet
          f&ouml;r just ert s&auml;llskap. Ber&auml;tta hur m&aring;nga ni blir och om ni firar
          n&aring;got speciellt s&aring; &aring;terkommer vi med tillg&auml;nglighet och menyf&ouml;rslag.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Boka Bord
        </a>
      </section>
    </>
  );
}
