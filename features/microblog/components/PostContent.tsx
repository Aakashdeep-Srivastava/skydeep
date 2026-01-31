'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPostDate } from '@/lib/posts-data';
import { EmailContact } from './EmailContact';

interface PostContentProps {
  title: string;
  date: string;
  content: string;
  tags?: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export function PostContent({ title, date, content, tags, imageUrl, videoUrl }: PostContentProps) {
  // Convert markdown-like content to HTML (basic implementation)
  const renderContent = (text: string) => {
    // Split by double newlines for paragraphs
    const sections = text.split('\n\n');

    return sections.map((section, idx) => {
      // Handle headers
      if (section.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-xl font-semibold text-theme-primary mt-8 mb-4">
            {section.replace('## ', '')}
          </h2>
        );
      }
      if (section.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-lg font-semibold text-theme-primary mt-6 mb-3">
            {section.replace('### ', '')}
          </h3>
        );
      }

      // Handle code blocks
      if (section.startsWith('```')) {
        const lines = section.split('\n');
        const lang = lines[0].replace('```', '');
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre key={idx} className="mt-4 p-4 bg-AAprimary/80 border border-theme-muted/30 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono text-theme-secondary">
              {code}
            </code>
          </pre>
        );
      }

      // Handle lists
      if (section.includes('\n-') || section.startsWith('-')) {
        const items = section.split('\n').filter(line => line.startsWith('-') || line.startsWith('  -'));
        return (
          <ul key={idx} className="mt-4 space-y-2 list-none">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-theme-secondary">
                <span className="text-AAsecondary mt-1">▹</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineText(item.replace(/^-\s*/, '').replace(/^\s+-\s*/, '  ')) }} />
              </li>
            ))}
          </ul>
        );
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(section) || section.includes('\n1.')) {
        const items = section.split('\n').filter(line => /^\d+\.\s/.test(line));
        return (
          <ol key={idx} className="mt-4 space-y-2 list-none">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-theme-secondary">
                <span className="text-AAsecondary font-mono">{i + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineText(item.replace(/^\d+\.\s*/, '')) }} />
              </li>
            ))}
          </ol>
        );
      }

      // Regular paragraph
      return (
        <p
          key={idx}
          className="mt-4 text-theme-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatInlineText(section) }}
        />
      );
    });
  };

  // Format inline text (bold, code, links)
  const formatInlineText = (text: string): string => {
    return text
      // Bold text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-theme-primary font-semibold">$1</strong>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-AAsecondary/10 text-AAsecondary rounded font-mono text-sm">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-AAsecondary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  // Extract YouTube video ID
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/thoughts"
        className="inline-flex items-center gap-2 text-AAsecondary font-mono text-sm hover:underline mb-8"
      >
        <span aria-hidden="true">←</span>
        Back to all thoughts
      </Link>

      {/* Header */}
      <header className="mb-8">
        <time className="text-AAsecondary font-mono text-sm">
          {formatPostDate(date)}
        </time>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-theme-primary">
          {title}
        </h1>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono text-AAsecondary bg-AAsecondary/10 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden border border-theme-muted/30">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Featured Video */}
      {videoUrl && (
        <div className="mb-8 aspect-video rounded-lg overflow-hidden border border-theme-muted/30">
          {getYouTubeId(videoUrl) ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <video src={videoUrl} controls className="w-full h-full" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="prose-custom">
        {renderContent(content)}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-theme-muted/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-theme-secondary">
            Want to discuss this topic?
          </p>
          <EmailContact />
        </div>
      </footer>
    </article>
  );
}
