'use client';

import { VentureCard, DonationLinks } from '@/features/fund-me/components';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';
import venturesData from '@/content/ventures.json';

type VentureStatus = 'planning' | 'in-progress' | 'launched';

interface Venture {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  status: VentureStatus;
}

// Note: Metadata is handled in layout or through generateMetadata in a separate file

export default function SupportPage() {
  const ventures = venturesData.ventures as Venture[];
  const donation = venturesData.donation;

  return (
    <div className="min-h-screen bg-AAprimary">
      <Header finishedLoading={true} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-AAsecondary font-mono text-lg sm:text-xl">06.</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-primary">
              Support My Ventures
            </h1>
            <div className="flex-grow h-[1px] bg-theme-muted ml-4 hidden sm:block"></div>
          </div>
          <p className="text-theme-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Help bring these ideas to life. Your support enables me to dedicate more time
            to building innovative solutions and open-source projects.
          </p>
        </header>

        {/* Ventures */}
        {ventures.length > 0 && (
          <section className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6">
              Current Projects
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {ventures.map((venture) => (
                <VentureCard
                  key={venture.id}
                  title={venture.title}
                  description={venture.description}
                  imageUrl={venture.imageUrl}
                  status={venture.status}
                />
              ))}
            </div>
          </section>
        )}

        {/* Divider */}
        <div className="border-t border-theme-muted/30 my-8 sm:my-12" />

        {/* Donation Links */}
        <section>
          <DonationLinks
            paypal={donation.paypal}
            upi={donation.upi}
            email={donation.email}
          />
        </section>

        {/* Additional Info */}
        <section className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg bg-AAsecondary/5 border border-AAsecondary/20">
          <h3 className="text-base sm:text-lg font-semibold text-theme-primary mb-3">
            How Your Support Helps
          </h3>
          <ul className="space-y-2 text-theme-secondary text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-AAsecondary mt-0.5 flex-shrink-0">▹</span>
              <span>Dedicated time for open-source development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-AAsecondary mt-0.5 flex-shrink-0">▹</span>
              <span>Server costs for running experimental projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-AAsecondary mt-0.5 flex-shrink-0">▹</span>
              <span>Learning resources and tools for better content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-AAsecondary mt-0.5 flex-shrink-0">▹</span>
              <span>Coffee to fuel late-night coding sessions</span>
            </li>
          </ul>
        </section>
      </main>

      <Footer
        githubUrl="https://github.com/Aakashdeep-Srivastava"
        hideSocialsInDesktop={true}
      />
    </div>
  );
}
