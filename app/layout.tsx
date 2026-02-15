import './globals.css';
import { Providers } from './providers';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://skydeep0551.vercel.app'),
  title: 'Aakashdeep Srivastava - AI Engineer',
  description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions. Winner of multiple hackathons and experienced in leading technical teams.',
  robots: 'follow, index',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Aakashdeep',
  },
  openGraph: {
    url: 'https://skydeep0551.vercel.app',
    type: 'website',
    siteName: 'Aakashdeep Srivastava',
    title: 'Aakashdeep Srivastava - AI Engineer',
    description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions.',
    images: ['/icons/icon-512x512.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakashdeep Srivastava - AI Engineer',
    description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions.',
    images: ['/icons/icon-512x512.png'],
  },
  alternates: {
    canonical: 'https://skydeep0551.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#64ffda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
