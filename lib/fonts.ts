
import { Caveat, Kalam, Poppins } from 'next/font/google';

export const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const kalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

    