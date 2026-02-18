import type { Metadata } from 'next';
import { IBM_Plex_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Sihliconvalley — The Antidote',
  description: 'Community projects near the Sihl. Local, open, accountable.',
  metadataBase: new URL('https://sihliconvalley.ch'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
