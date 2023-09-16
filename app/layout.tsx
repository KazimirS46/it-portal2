import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  robotoFont,
  casperFont,
  robotoMonoFont,
  rubicFont,
  sfFont,
} from '@/fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'IT портал',
  description: 'IT портал Региона',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body
        className={`${robotoFont.variable} ${robotoMonoFont.variable} ${rubicFont.variable} ${casperFont.variable} ${sfFont.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
