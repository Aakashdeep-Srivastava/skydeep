'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { PostContent } from '@/features/microblog/components';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';
import { getPostBySlug } from '@/lib/posts-data';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-AAprimary">
      <Header finishedLoading={true} />

      <main className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <PostContent
          title={post.title}
          date={post.date}
          content={post.content}
          tags={post.tags}
          imageUrl={post.imageUrl}
          videoUrl={post.videoUrl}
        />
      </main>

      <Footer
        githubUrl="https://github.com/Aakashdeep-Srivastava"
        hideSocialsInDesktop={true}
      />
    </div>
  );
}
