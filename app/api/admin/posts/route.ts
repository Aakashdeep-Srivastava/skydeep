import { NextRequest, NextResponse } from 'next/server';
import { createPostSchema } from '@/lib/validations';
import { createOrUpdateFile } from '@/lib/github';

function generateSlug(title: string): string {
  const date = new Date().toISOString().split('T')[0];
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${date}-${slug}`;
}

export async function POST(request: NextRequest) {
  try {
    // Check authorization (simple header check)
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = createPostSchema.parse(body);

    const id = generateSlug(validatedData.title);
    const now = new Date().toISOString();

    // Create post object
    const post = {
      id,
      title: validatedData.title,
      content: validatedData.content,
      excerpt: validatedData.excerpt || validatedData.content.substring(0, 200) + '...',
      date: now,
      imageUrl: validatedData.imageUrl || undefined,
      videoUrl: validatedData.videoUrl || undefined,
      tags: validatedData.tags || [],
    };

    // Create post file
    await createOrUpdateFile({
      path: `content/posts/${id}.json`,
      content: JSON.stringify(post, null, 2),
      message: `Add post: ${validatedData.title}`,
    });

    // Update index.json
    // First, fetch current index
    const indexResponse = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/content/posts/index.json`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    let currentIndex = { posts: [] as Array<{ id: string; title: string; date: string; excerpt: string; tags?: string[] }> };

    if (indexResponse.ok) {
      const indexData = await indexResponse.json();
      const content = Buffer.from(indexData.content, 'base64').toString('utf-8');
      currentIndex = JSON.parse(content);
    }

    // Add new post to index
    const postMeta = {
      id: post.id,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      tags: post.tags,
    };

    currentIndex.posts.unshift(postMeta);

    // Update index file
    await createOrUpdateFile({
      path: 'content/posts/index.json',
      content: JSON.stringify(currentIndex, null, 2),
      message: `Update posts index: add ${validatedData.title}`,
    });

    return NextResponse.json({
      success: true,
      post: { id, title: post.title },
    });
  } catch (error) {
    console.error('Error creating post:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid post data' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    }

    // Delete would require more complex logic to update index
    // For now, return not implemented
    return NextResponse.json(
      { error: 'Delete not yet implemented - manually remove from GitHub' },
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
