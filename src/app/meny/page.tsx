import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meny',
  description:
    'Utforska menyn p\u00e5 M\u00e5rten Trotzig i Gamla Stan. Svenska klassiker, s\u00e4songens r\u00e4tter, desserter, cocktails och noggrant utvalda viner.',
};

type MenuItem = {
  name: string;
  price: number;
  description: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'forratter',
    title: 'F\u00f6rr\u00e4tter',
    items: [
      { name: 'Toast Skagen', price: 218, description: 'r\u00f6dl\u00f6k, citron toppad med l\u00f6jrom' },
      { name: '30g. Kalixl\u00f6jrom', price: 378, description: 'med v\u00e4sterbottensostpaj, r\u00f6dl\u00f6k, cr\u00e8me fraiche, citron' },
      { name: 'Trotzigs S.O.S.', price: 198, description: 'tre sorters sill med tillbeh\u00f6r' },
      { name: 'Karljohansvampsoppa', price: 188, description: 'med krispigt sidfl\u00e4sk' },
      { name: 'Tartar p\u00e5 gravlax', price: 195, description: 'med syrad gr\u00e4dde, gurka, senapsfr\u00f6, dill, t\u00e5ngkaviar, friterat tunnbr\u00f6d' },
      { name: '3-r\u00e4tters menyf\u00f6rslag', price: 695, description: 'Toast Skagen, R\u00f6dingsfilé/Oxfilé och \u00c4ppelstrudel.' },
    ],
  },
  {
    id: 'varmratter',
    title: 'Varmr\u00e4tter',
    items: [
      { name: 'Stekt senapsmarinerad str\u00f6mming', price: 258, description: 'med potatispur\u00e9, r\u00e5r\u00f6rda lingon, brynt sm\u00f6r, citron' },
      { name: 'R\u00f6dingfil\u00e9', price: 348, description: 'med \u00e4pple, gr\u00f6nk\u00e5l, svamp, kompott p\u00e5 r\u00f6kt sidfl\u00e4sk, potatispur\u00e9, r\u00f6dvinss\u00e5s' },
      { name: 'Laxfil\u00e9', price: 298, description: 'med socker\u00e4rtor, f\u00e4nk\u00e5l, ros\u00e9sallad, vitvinss\u00e5s, t\u00e5ngkaviar, dillolja' },
      { name: 'Torskrygg', price: 328, description: 'med r\u00e4kor, \u00e4gg, pepparrot, brynt sm\u00f6r, kokt potatis' },
      { name: 'Helstekt renytterfilé', price: 448, description: 'med v\u00e4sterbottensost- och kantarellfylld potatiskaka, portvinss\u00e5s, lingonsabayon, krispigt k\u00e5l' },
      { name: 'K\u00f6ttbullar', price: 258, description: 'med gr\u00e4dds\u00e5s, potatispur\u00e9, r\u00e5r\u00f6rda lingon, pressgurka' },
      { name: 'Oxfil\u00e9 tournedos', price: 389, description: 'med cognac- och peppars\u00e5s, k\u00e5l, pommes frites' },
      { name: 'Wallenbergare', price: 288, description: 'med potatispur\u00e9, \u00e4rtor, brynt sm\u00f6r, r\u00e5r\u00f6rda lingon' },
      { name: 'Stekt fl\u00e4sk', price: 225, description: 'med l\u00f6ks\u00e5s och kokt potatis' },
      { name: 'Potatiskroketter', price: 228, description: 'med \u00f6rtdressad endiver- och ros\u00e9sallad, parmesanmayo, saltrostad marconamandlar' },
      { name: 'Kroppkakor (veg)', price: 208, description: 'Fyllda med kantareller, serveras med brynt sm\u00f6r, lingon, spenat och v\u00e4sterbottenost.' },
      { name: 'Grill & charkbricka (2 pers)', price: 628, description: 'Utvalda charkuterier samt val av k\u00f6tt eller fisk/skaldjur.' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    items: [
      { name: 'Varm \u00e4ppelstrudel', price: 148, description: 'med vaniljglass' },
      { name: 'Vaniljglass', price: 155, description: 'med varma hjortron' },
      { name: 'Trotzigs chokladpralin', price: 64, description: 'handgjord pralin' },
      { name: 'Ostbricka', price: 208, description: 'utvalda dessertostar' },
      { name: 'Chokladfondant', price: 148, description: 'Med vaniljglass, chokladjord och hjortron.' },
      { name: 'Cr\u00e8me br\u00fbl\u00e9e', price: 78, description: 'Klassisk cr\u00e8me br\u00fbl\u00e9e med kn\u00e4ckigt sockerlock.' },
      { name: 'Vaniljglass med hjortron', price: 125, description: '' },
    ],
  },
  {
    id: 'cocktails',
    title: 'Cocktails',
    items: [
      { name: 'Aperol spritz', price: 145, description: 'Aperol, Cava och sodavatten.' },
      { name: 'Gamla stan old fashioned', price: 165, description: 'Bourbon, sockerlag, angostura bitters och apelsinzest.' },
      { name: 'Nordic mule', price: 165, description: 'Vodka, ingef\u00e4rs\u00f6l, lime och mynta.' },
      { name: 'Trotzig gin & tonic', price: 165, description: 'Stockholms Br\u00e4nneri Gin, Rosmarin, Tonic och Lingon.' },
    ],
  },
  {
    id: 'rott-vin',
    title: 'R\u00f6tt vin',
    items: [
      { name: 'M\u00e5rten trotzigs r\u00f6da', price: 135, description: 'C\u00f4tes du Rh\u00f4ne, Frankrike. Fylligt och kryddigt.' },
      { name: 'Valpolicella ripasso', price: 155, description: 'Italien. Mjukt b\u00e4rigt vin med inslag av k\u00f6rsb\u00e4r.' },
      { name: 'Pinot noir Usa', price: 165, description: 'Kalifornien. Medelfylligt med smak av jordgubbar.' },
    ],
  },
  {
    id: 'vitt-vin',
    title: 'Vitt vin',
    items: [
      { name: 'Chablis', price: 175, description: 'Frankrike. Elegant, torrt med h\u00f6g syra.' },
      { name: 'M\u00e5rten trotzigs vita', price: 135, description: 'Sauvignon Blanc, Frankrike. Friskt och fruktigt.' },
      { name: 'Riesling trocken', price: 155, description: 'Tyskland. Torrt, friskt med inslag av citrus.' },
    ],
  },
  {
    id: 'bubbel',
    title: 'Bubbel',
    items: [
      { name: 'Cava', price: 125, description: 'Mas Pere, Spanien.' },
      { name: 'Husets champagne', price: 175, description: 'Andr\u00e9 Clouet Silver Brut Nature.' },
    ],
  },
  {
    id: 'alkoholfritt',
    title: 'Alkoholfritt',
    items: [
      { name: 'L\u00e4sk', price: 45, description: 'Cola, Fanta, Sprite.' },
      { name: 'L\u00e4tt\u00f6l', price: 45, description: 'Gr\u00e4ngesberg.' },
      { name: '\u00c4ppelmust', price: 65, description: 'V\u00e4rmd\u00f6 Musteri. 100% \u00c4pple.' },
    ],
  },
];

export default function MenyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-small">
        <div className="hero-bg">
          <img src="/images/DSC00378-HDR.webp" alt="Meny - Restaurang M&aring;rten Trotzig" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Meny</h1>
          <p>
            V&auml;lkommen att utforska v&aring;ra menyer. V&auml;lj fritt fr&aring;n v&aring;r &agrave; la carte,
            njut av en noga komponerad trer&auml;ttersmeny eller l&aring;t oss skr&auml;ddarsy en upplevelse
            f&ouml;r ert s&auml;llskap med v&aring;ra gruppmenyer. V&aring;ra r&auml;tter &auml;r en hyllning
            till den svenska mattraditionen, alltid tillagade med s&auml;songens finaste r&aring;varor.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="section">
        <div className="container">
          <div className="menu-layout">
            {/* Sidebar */}
            <aside className="menu-sidebar">
              <h3>Kategorier</h3>
              <ul>
                {menuData.map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`}>{category.title}</a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Menu items */}
            <div>
              {menuData.map((category) => (
                <div key={category.id} id={category.id} className="menu-category">
                  <h3>{category.title}</h3>
                  <div className="menu-grid">
                    {category.items.map((item) => (
                      <div key={item.name} className="menu-item">
                        <div className="menu-item-info">
                          <h4>{item.name}</h4>
                          {item.description && <p>{item.description}</p>}
                        </div>
                        <span className="menu-item-price">{item.price} kr</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
