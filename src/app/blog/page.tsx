import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export const revalidate = 3600; // ISR with 1-hour revalidation

export default function BlogPage() {
  const posts = allPosts
    .filter((post: Post) => !post.draft)
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Insights and strategies from a fractional CTO perspective
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {posts.map((post: Post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
              
              <Link href={post.url} className="group block mt-4">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
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