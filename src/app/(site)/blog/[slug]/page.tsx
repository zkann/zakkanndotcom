import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import Link from 'next/link';
import Image from 'next/image';
import Toc from './toc';
import ReadingProgress from '@/components/ReadingProgress';
import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';

export const revalidate = 3600; // ISR with 1-hour revalidation

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return {};
  const title = post.title;
  const description = post.excerpt;
  const url = `https://zakkann.com${post.url}`;
  return {
    title,
    description,
    alternates: { canonical: post.url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = allPosts.find((p: Post) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);
  const postsSorted = [...allPosts].sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));
  const currentIndex = postsSorted.findIndex((p: Post) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? postsSorted[currentIndex - 1] : null;
  const nextPost = currentIndex < postsSorted.length - 1 ? postsSorted[currentIndex + 1] : null;
  const updatedDate = post.updated || post.date;

  return (
    <div className="bg-white">
      <ReadingProgress />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                '@type': 'Person',
                name: post.author || 'Zak Kann',
                url: 'https://zakkann.com/about',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://zakkann.com${post.url}`,
              },
              description: post.excerpt,
            }),
          }}
        />
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-8 relative">
          <article className="max-w-none">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-xl text-gray-700 max-w-3xl">{post.excerpt}</p>
            )}
            <div className="mt-6">
              <Image src="/zakkann.jpg" alt="Zak Kann" width={48} height={48} className="rounded-full object-cover" />
            </div>
            <div className="flex items-center space-x-4 text-gray-500 mt-6">
              <time dateTime={post.date} className="text-base">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-gray-300">•</span>
              <span className="text-base">By {post.author}</span>
              <span className="text-gray-300">•</span>
              <span className="text-base">{post.readingTimeMinutes} min read</span>
              {updatedDate && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-base">Updated {new Date(updatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose lg:prose-xl max-w-prose prose-headings:scroll-mt-24 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:before:content-[''] prose-code:after:content-['']">
            <MDXContent />
          </div>

          {/* Author box */}
          <div className="mt-10 p-6 border border-gray-200 rounded-lg bg-gray-50 flex items-center gap-4">
            <Image src="/zakkann.jpg" alt="Zak Kann" width={56} height={56} className="rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900">About the author</p>
              <p className="text-gray-700 text-sm">Zak Kann is a fractional CTO helping SMBs cut costs and ship faster with automation, data pipelines, and internal tools.</p>
            </div>
          </div>

          {/* Share links */}
          <div className="mt-8 flex gap-4">
            <a
              className="text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://zakkann.com' + post.url)}`}
            >
              Share on Twitter
            </a>
            <a
              className="text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://zakkann.com' + post.url)}`}
            >
              Share on LinkedIn
            </a>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <nav className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
            {previousPost ? (
              <Link href={previousPost.url} className="text-blue-600 hover:text-blue-700">
                ← {previousPost.title}
              </Link>
            ) : <span />}
            {nextPost ? (
              <Link href={nextPost.url} className="text-blue-600 hover:text-blue-700">
                {nextPost.title} →
              </Link>
            ) : <span />}
          </nav>
          </article>
          <div className="hidden lg:block">
            <Toc />
          </div>
        </div>
      </div>
    </div>
  );
} 