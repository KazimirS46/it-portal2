import type { Metadata } from 'next';
import { Roboto, Roboto_Mono, Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IT портал',
  description: 'IT портал самарской области',
};

const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-roboto',
});

const robotoMonoFont = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-robotoMono',
});

const rubicFont = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-rubik',
});

const casperFont = localFont({
  src: [
    {
      path: '../public/fonts/Casper/Casper.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-casper',
});

const sfFont = localFont({
  src: [
    {
      path: '../public/fonts/sf/SF-Pro-Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf/SF-Pro-Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf/SF-Pro-Display-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf',
});

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
