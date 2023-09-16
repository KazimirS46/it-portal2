import { Roboto, Roboto_Mono, Rubik } from 'next/font/google';
import localFont from 'next/font/local';

export const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-roboto',
});

export const robotoMonoFont = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-robotoMono',
});

export const rubicFont = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-rubik',
});

export const casperFont = localFont({
  src: [
    {
      path: '../public/fonts/Casper/Casper.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-casper',
});

export const sfFont = localFont({
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
