'use client';

interface EmailContactProps {
  size?: 'sm' | 'md';
  className?: string;
}

export function EmailContact({ size = 'md', className = '' }: EmailContactProps) {
  const email = 'aakashdeep0551@gmail.com';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
  };

  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 font-mono text-AAsecondary border border-AAsecondary
                 rounded hover:bg-AAsecondary/10 transition-colors duration-300 ${sizeClasses[size]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === 'sm' ? 14 : 16}
        height={size === 'sm' ? 14 : 16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      Connect
    </a>
  );
}
