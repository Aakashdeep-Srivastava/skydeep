'use client';

import Image from 'next/image';

interface VentureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  status: 'planning' | 'in-progress' | 'launched';
}

const statusConfig = {
  'planning': {
    label: 'Planning',
    color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
  'launched': {
    label: 'Launched',
    color: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
};

export function VentureCard({ title, description, imageUrl, status }: VentureCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <article className="group p-4 sm:p-6 rounded-lg border border-theme-muted/30 bg-AAprimary/50
                        hover:border-AAsecondary/50 transition-all duration-300
                        hover:shadow-lg hover:shadow-AAsecondary/5">
      {/* Status Badge */}
      <span className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-mono rounded-full border ${statusInfo.color}`}>
        {statusInfo.label}
      </span>

      {/* Title */}
      <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-theme-primary group-hover:text-AAsecondary
                     transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-theme-secondary text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {/* Image */}
      {imageUrl && (
        <div className="mt-3 sm:mt-4 rounded-lg overflow-hidden border border-theme-muted/20">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={300}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </article>
  );
}
