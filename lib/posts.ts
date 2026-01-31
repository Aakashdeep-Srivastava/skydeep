import fs from 'fs';
import path from 'path';

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

export interface PostsIndex {
  posts: PostMeta[];
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

/**
 * Get all posts metadata for listing
 */
export function getAllPosts(): PostMeta[] {
  const indexPath = path.join(POSTS_DIR, 'index.json');

  if (!fs.existsSync(indexPath)) {
    return [];
  }

  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  const index: PostsIndex = JSON.parse(indexContent);

  // Sort by date descending (newest first)
  return index.posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single post by its slug/id
 */
export function getPostBySlug(slug: string): Post | null {
  const postPath = path.join(POSTS_DIR, `${slug}.json`);

  if (!fs.existsSync(postPath)) {
    return null;
  }

  const postContent = fs.readFileSync(postPath, 'utf-8');
  return JSON.parse(postContent);
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map(post => post.id);
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
