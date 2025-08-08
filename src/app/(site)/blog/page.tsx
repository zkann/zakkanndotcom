import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export const revalidate = 3600; // ISR with 1-hour revalidation

export default function BlogPage() {
  const posts = allPosts
    .filter((post: Post) => !post.draft)
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

        <div className="mt-16 space-y-12">
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