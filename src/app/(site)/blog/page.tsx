import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { Suspense } from 'react';
import { use } from 'react';

export const revalidate = 3600; // ISR with 1-hour revalidation

function BlogList({ tag, search }: { tag?: string; search?: string }) {
  const posts = allPosts
    .filter((post: Post) => !post.draft)
    .filter((post: Post) => (tag ? post.tags?.includes(tag) : true))
    .filter((post: Post) => (search ? (post.title + ' ' + post.excerpt).toLowerCase().includes(search.toLowerCase()) : true))
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Insights and strategies from a fractional CTO perspective
          </p>
        </div>

          <div className="mt-6 text-sm text-gray-600">
            Topics: <Link href="/blog?tag=automation" className="text-blue-600 hover:text-blue-700">Automation</Link>, {''}
            <Link href="/blog?tag=data" className="text-blue-600 hover:text-blue-700">Data</Link>, {''}
            <Link href="/blog?tag=internal%20tools" className="text-blue-600 hover:text-blue-700">Internal Tools</Link>
            <span className="ml-2">·</span>{' '}
            <Link href="/feed.xml" className="text-blue-600 hover:text-blue-700">RSS</Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {Array.from(new Set(allPosts.flatMap((p) => p.tags || []))).map((t) => (
            <Link
              key={t}
              href={t === tag ? '/blog' : `/blog?tag=${encodeURIComponent(t)}`}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                t === tag ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {t}
            </Link>
          ))}
        </div>

        <form className="mt-10 max-w-xl mx-auto flex gap-2" action="/blog" method="get">
          <input name="search" defaultValue={search} placeholder="Search posts" className="flex-1 border border-gray-300 rounded-md px-3 py-2" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Search</button>
        </form>

        <div className="mt-8 space-y-12">
          {posts.map((post: Post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <time dateTime={post.date} className="font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-gray-300">•</span>
                <span className="font-medium">By {post.author}</span>
                <span className="text-gray-300">•</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              
              <Link href={post.url} className="group block">
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {post.excerpt}
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Read more
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
} 

export default function BlogPage({ searchParams }: { searchParams: Promise<{ tag?: string; search?: string }> }) {
  const { tag, search } = use(searchParams);
  return (
    <Suspense>
      <BlogList tag={tag} search={search} />
    </Suspense>
  );
}