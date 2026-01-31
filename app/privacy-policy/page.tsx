import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Aakashdeep Srivastava',
  description: 'Privacy Policy for aakashdeep.dev',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-AAprimary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-AAtertiary shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-theme-primary mb-6">Privacy Policy for anaflous.com</h1>
          <p className="text-sm text-theme-secondary mb-8">Effective Date: 5 Oct 2024</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-theme-primary mb-4">1. Google Analytics</h2>
            <p className="text-theme-secondary mb-4">
              This website uses Google Analytics to collect and analyze visitor data, such as:
            </p>
            <ul className="list-disc pl-5 mb-4 text-theme-secondary">
              <li>Device type</li>
              <li>Browser information</li>
              <li>General user behavior (e.g., pages viewed, session duration)</li>
            </ul>
            <p className="text-theme-secondary">
              This data is non-personally identifiable and is collected only for analytical purposes to improve the user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-theme-primary mb-4">2. Portfolio and Projects</h2>
            <p className="text-theme-secondary mb-4">
              The website <a href="https://anaflous.com" className="text-AAsecondary hover:text-AAsecondary/80 transition duration-300">anaflous.com</a> serves as my personal portfolio where I share my resume and software projects.
            </p>
            <p className="text-theme-secondary">
              One of the projects demonstrates, for educational purposes, what websites can collect about users. This project does not collect data unless the user explicitly interacts with it to learn more about data collection practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-theme-primary mb-4">3. No Personal Data Collection</h2>
            <p className="text-theme-secondary mb-4">
              Unless a user specifically interacts with certain features, this website does not collect personal data. It functions as a portfolio to showcase my work.
            </p>
            <p className="text-theme-secondary">
              Only standard Google Analytics data is collected for non-personal tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-theme-primary mb-4">4. Contact Information</h2>
            <p className="text-theme-secondary">
              If you have any questions regarding this privacy policy, feel free to contact me at:
            </p>
            <p className="text-theme-secondary mt-2">
              Email: <a href="mailto:your.email@example.com" className="text-AAsecondary hover:text-AAsecondary/80 transition duration-300">latif@anaflous.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
