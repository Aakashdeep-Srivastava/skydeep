'use client';

import { useState } from 'react';

interface PostFormProps {
  onSuccess?: () => void;
}

export function PostForm({ onSuccess }: PostFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          excerpt: excerpt || content.substring(0, 200) + '...',
          imageUrl: imageUrl || undefined,
          videoUrl: videoUrl || undefined,
          tags: tags ? tags.split(',').map(t => t.trim().toLowerCase()) : [],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create post');
      }

      setSuccess(true);
      setTitle('');
      setContent('');
      setExcerpt('');
      setImageUrl('');
      setVideoUrl('');
      setTags('');
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
          Post created successfully! It will appear after Vercel rebuilds (usually within 1-2 minutes).
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-theme-primary mb-2">
          Title *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted
                     focus:outline-none focus:border-AAsecondary transition-colors"
          placeholder="Enter post title"
        />
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-theme-primary mb-2">
          Content * (Markdown supported)
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={12}
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted font-mono text-sm
                     focus:outline-none focus:border-AAsecondary transition-colors resize-y"
          placeholder="Write your post content here...

## Markdown Supported
- **Bold text** with double asterisks
- `inline code` with backticks
- Code blocks with triple backticks
- Lists with - or numbered with 1. 2. 3."
        />
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-theme-primary mb-2">
          Excerpt (optional - auto-generated if empty)
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted
                     focus:outline-none focus:border-AAsecondary transition-colors resize-y"
          placeholder="Brief summary for the post card"
        />
      </div>

      {/* Image URL */}
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-theme-primary mb-2">
          Image URL (optional)
        </label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted
                     focus:outline-none focus:border-AAsecondary transition-colors"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* Video URL */}
      <div>
        <label htmlFor="videoUrl" className="block text-sm font-medium text-theme-primary mb-2">
          Video URL (optional - YouTube supported)
        </label>
        <input
          type="url"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted
                     focus:outline-none focus:border-AAsecondary transition-colors"
          placeholder="https://youtube.com/watch?v=..."
        />
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-theme-primary mb-2">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                     text-theme-primary placeholder:text-theme-muted
                     focus:outline-none focus:border-AAsecondary transition-colors"
          placeholder="ai, programming, rust"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-AAsecondary text-AAprimary font-semibold rounded-lg
                   hover:bg-AAsecondary/90 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors duration-300"
      >
        {isSubmitting ? 'Publishing...' : 'Publish Post'}
      </button>
    </form>
  );
}
