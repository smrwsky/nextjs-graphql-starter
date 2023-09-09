import { Source_Sans_3, Vollkorn } from 'next/font/google';

export const primaryFont = Source_Sans_3({
  variable: '--primary-font',
  weight: ['900', '700', '600', '400'],
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
});

export const secondaryFont = Vollkorn({
  variable: '--secondary-font',
  weight: ['700', '600', '500', '400'],
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
});
