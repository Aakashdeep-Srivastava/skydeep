'use client';

import Link from 'next/link';
import { formatPostDate } from '@/lib/posts-data';
import { EmailContact } from './EmailContact';

interface PostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export function PostCard({ id, title, date, excerpt, tags }: PostCardProps) {
  return (
    <article className="group p-4 sm:p-6 rounded-lg border border-theme-muted/30 bg-AAprimary/50
                        hover:border-AAsecondary/50 transition-all duration-300
                        hover:shadow-lg hover:shadow-AAsecondary/5 active:scale-[0.99]">
      {/* Date */}
      <time className="text-AAsecondary font-mono text-xs sm:text-sm">
        {formatPostDate(date)}
      </time>

      {/* Title */}
      <h2 className="mt-2 text-lg sm:text-xl font-semibold text-theme-primary group-hover:text-AAsecondary
                     transition-colors duration-300">
        <Link href={`/thoughts/${id}`} className="hover:underline">
          {title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className="mt-2 sm:mt-3 text-theme-secondary text-sm sm:text-base line-clamp-3 leading-relaxed">
        {excerpt}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 sm:py-1 text-xs font-mono text-AAsecondary bg-AAsecondary/10 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          href={`/thoughts/${id}`}
          className="text-AAsecondary font-mono text-sm hover:underline inline-flex items-center gap-1
                     active:scale-95 transition-transform"
        >
          Read more
          <span aria-hidden="true">→</span>
        </Link>
        <EmailContact size="sm" />
      </div>
    </article>
  );
}
