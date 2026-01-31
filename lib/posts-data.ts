// This file aggregates all posts for client-side use
// When adding new posts, import them here

import postsIndex from '@/content/posts/index.json';
import post_rust from '@/content/posts/2024-01-15-learning-rust-memory-management.json';
import post_rag from '@/content/posts/2024-01-14-building-rag-pipelines.json';

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
  imageUrl?: string;
  videoUrl?: string;
}

// All posts mapped by ID for quick lookup
const postsById: Record<string, Post> = {
  '2024-01-15-learning-rust-memory-management': post_rust as Post,
  '2024-01-14-building-rag-pipelines': post_rag as Post,
};

/**
 * Get all posts metadata for listing (sorted by date, newest first)
 */
export function getAllPosts(): PostMeta[] {
  return [...postsIndex.posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single post by slug/id
 */
export function getPostBySlug(slug: string): Post | null {
  return postsById[slug] || null;
}

/**
 * Get all post slugs
 */
export function getAllPostSlugs(): string[] {
  return postsIndex.posts.map(post => post.id);
}

/**
 * Format date for display
 */
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
