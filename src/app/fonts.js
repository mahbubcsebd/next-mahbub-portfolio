import { Hind_Siliguri, Ubuntu, Urbanist } from 'next/font/google';

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-urbanist',
});

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-ubuntu',
});

export const hindSiliguri = Hind_Siliguri({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-hindSiliguri',
});
