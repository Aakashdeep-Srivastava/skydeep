'use client';

interface DonationLinksProps {
  paypal?: string;
  upi?: string;
  email: string;
}

export function DonationLinks({ paypal, upi, email }: DonationLinksProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-semibold text-theme-primary">Support Options</h3>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* PayPal Button */}
        {paypal && (
          <a
            href={paypal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3
                       bg-[#0070ba] text-white font-medium text-sm sm:text-base
                       rounded-lg hover:bg-[#005ea6] active:scale-95
                       transition-all duration-300 w-full sm:w-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.636h6.97c2.308 0 3.94.459 4.85 1.363.346.345.609.737.79 1.171.192.457.286.973.28 1.535v.443l.03.018c.4.212.726.473.978.783.296.364.5.785.608 1.26.113.495.116 1.082.008 1.747a5.52 5.52 0 0 1-.623 1.801 4.002 4.002 0 0 1-1.154 1.276 4.87 4.87 0 0 1-1.603.729c-.609.155-1.3.234-2.059.234h-.49a1.455 1.455 0 0 0-1.434 1.227l-.026.15-.442 2.793-.02.104a1.456 1.456 0 0 1-1.435 1.227h-.001zM18.5 8.357v-.018c-.01-.045-.021-.09-.033-.134a2.623 2.623 0 0 0-.16-.432 3.025 3.025 0 0 0-.692-.95c-.97-.879-2.59-1.255-4.735-1.255h-5.59a1.455 1.455 0 0 0-1.434 1.227L3.79 19.883a.385.385 0 0 0 .38.444h3.17l.795-5.046.001-.003a1.455 1.455 0 0 1 1.435-1.227h2.99c2.94 0 5.242-1.194 5.918-4.65.02-.102.037-.202.052-.3a3.315 3.315 0 0 0-.031-.744z" />
            </svg>
            Donate with PayPal
          </a>
        )}

        {/* UPI Button */}
        {upi && (
          <button
            onClick={() => {
              navigator.clipboard.writeText(upi);
              alert('UPI ID copied to clipboard!');
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3
                       bg-[#5c2d91] text-white font-medium text-sm sm:text-base
                       rounded-lg hover:bg-[#4a2474] active:scale-95
                       transition-all duration-300 w-full sm:w-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span className="truncate">UPI: {upi}</span>
          </button>
        )}
      </div>

      {/* Email Contact */}
      <div className="pt-3 sm:pt-4 border-t border-theme-muted/30">
        <p className="text-theme-secondary text-sm sm:text-base flex flex-wrap items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-AAsecondary flex-shrink-0"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>Contact:</span>
          <a
            href={`mailto:${email}`}
            className="text-AAsecondary hover:underline break-all"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
}
