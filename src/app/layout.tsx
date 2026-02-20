import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Mårten Trotzig | Restaurang i Gamla Stan, Stockholm',
    template: '%s | Mårten Trotzig',
  },
  description: 'Välkommen till Mårten Trotzig i Gamla Stan. Njut av vällagad mat i historisk miljö med noga utvalda viner. Boka bord och upplev Stockholm.',
  icons: {
    icon: '/martentrotzig/images/favicon.jpg',
    apple: '/martentrotzig/images/webclip.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv-SE">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
