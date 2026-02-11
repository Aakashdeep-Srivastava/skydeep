import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://aakashdeep.dev'),
  title: 'Aakashdeep Srivastava - AI Engineer',
  description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions. Winner of multiple hackathons and experienced in leading technical teams.',
  robots: 'follow, index',
  openGraph: {
    url: 'https://aakashdeep.dev',
    type: 'website',
    siteName: 'Aakashdeep Srivastava',
    title: 'Aakashdeep Srivastava - AI Engineer',
    description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions.',
    images: ['/profile-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakashdeep Srivastava - AI Engineer',
    description: 'AI Engineer with expertise in MLOps, LLMs, and innovative machine learning solutions.',
    images: ['/profile-image.png'],
  },
  alternates: {
    canonical: 'https://aakashdeep.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
