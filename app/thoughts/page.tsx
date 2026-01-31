'use client';

import { PostCard } from '@/features/microblog/components';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';
import postsData from '@/content/posts/index.json';

// Note: Metadata is handled in layout or through generateMetadata in a separate file

export default function ThoughtsPage() {
  // Sort posts by date (newest first)
  const posts = [...postsData.posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-AAprimary">
      <Header finishedLoading={true} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-AAsecondary font-mono text-lg sm:text-xl">05.</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-primary">My Thoughts</h1>
            <div className="flex-grow h-[1px] bg-theme-muted ml-4 hidden sm:block"></div>
          </div>
          <p className="text-theme-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Daily learnings and discoveries. Sharing what I learn about AI, programming,
            and building things.
          </p>
        </header>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                tags={post.tags ?? []}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-theme-secondary text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer
        githubUrl="https://github.com/Aakashdeep-Srivastava"
        hideSocialsInDesktop={true}
      />
    </div>
  );
}
