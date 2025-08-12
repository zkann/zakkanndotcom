import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import PostThumbnail from '@/components/PostThumbnail';
import { Suspense } from 'react';
import { use } from 'react';
import TagFilters from '@/components/TagFilters';
import ConvertKitForm from '@/components/ConvertKitForm';

export const revalidate = 3600; // ISR with 1-hour revalidation

function BlogList({ tag, search, page: pageParam }: { tag?: string; search?: string; page?: string }) {
  const allPublished = allPosts
    .filter((post: Post) => !post.draft)
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));

  const filtered = allPublished
    .filter((post: Post) => (tag ? post.tags?.includes(tag) : true))
    .filter((post: Post) =>
      search ? (post.title + ' ' + post.excerpt).toLowerCase().includes(search.toLowerCase()) : true
    );

  const recentWithoutFeatured = filtered;

  const perPage = 6;
  const currentPage = Math.max(1, Number(pageParam) || 1);
  const totalPages = Math.max(1, Math.ceil(recentWithoutFeatured.length / perPage));
  const pagedRecent = recentWithoutFeatured.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Insights & strategies for AI‑powered SMBs
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Practical guides, use cases, and playbooks to automate work, ship faster, and save money with AI.
          </p>
        </div>

        {/* <div className="mt-6 text-sm text-gray-600 text-center">
          Topics: <Link href="/blog?tag=automation" className="text-blue-600 hover:text-blue-700">Automation</Link>,{' '}
          <Link href="/blog?tag=data" className="text-blue-600 hover:text-blue-700">Data</Link>,{' '}
          <Link href="/blog?tag=internal%20tools" className="text-blue-600 hover:text-blue-700">Internal Tools</Link>
        </div> */}

        <div className="mt-10 grid lg:grid-cols-[16rem_minmax(0,1fr)] gap-10 sm:gap-12 items-start">
          <aside className="lg:sticky lg:top-24 self-start space-y-6 w-full max-w-full overflow-hidden">
            <form className="flex gap-2 w-full max-w-full" action="/blog" method="get">
              <input
                name="search"
                defaultValue={search}
                placeholder="Search posts"
                className="flex-1 min-w-0 w-0 border border-gray-300 rounded-md px-3 py-2 bg-white"
              />
              <button className="flex-none px-4 py-2 bg-blue-600 text-white rounded-md">Search</button>
            </form>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Filters</h3>
              <TagFilters
                tags={allPublished.flatMap((p) => p.tags || [])}
                activeTag={tag}
                initialVisible={5}
              />
            </div>

            <div className="p-5 rounded-lg border bg-white max-w-full">
              <p className="text-sm font-semibold text-gray-900">Weekly automation insights</p>
              <p className="text-sm text-gray-600 mt-1">Join for bite‑sized, ROI‑focused ideas SMBs can ship in a week.</p>
              <div className="mt-3">
                <ConvertKitForm submitLabel="Subscribe" placeholder="name@email.com" />
              </div>
            </div>
          </aside>

          <main className="mt-6 lg:mt-0 min-w-0">
            {/* Featured */}
            {/* {featuredPosts.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link key={post.slug} href={post.url} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
                      <PostThumbnail src={post.ogImage} alt="" className="aspect-[16/9]" />
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">
                          <time dateTime={post.date} className="font-medium">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{post.readingTimeMinutes} min read</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 leading-tight">{post.title}</h3>
                        <p className="mt-2 text-gray-700">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )} */}

            {/* Recent */}
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent posts</h2>
                {filtered.length > perPage && (
                  <div className="text-sm text-gray-600">Page {currentPage} of {totalPages}</div>
                )}
              </div>
              {pagedRecent.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No blog posts found.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pagedRecent.map((post) => (
                    <Link key={post.slug} href={post.url} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
                      <PostThumbnail src={post.ogImage} alt="" className="aspect-[4/3]" />
                      <div className="p-5">
                        <div className="text-xs text-gray-500 mb-1">
                          <time dateTime={post.date} className="font-medium">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </time>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{post.readingTimeMinutes} min read</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 leading-snug">{post.title}</h3>
                        <p className="mt-2 text-gray-700 text-sm line-clamp-3">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <nav className="mt-8 flex items-center justify-between">
                  {currentPage > 1 ? (
                    <Link
                      href={`/blog?${new URLSearchParams({ ...(tag ? { tag } : {}), ...(search ? { search } : {}), page: String(currentPage - 1) }).toString()}`}
                      className="inline-flex items-center rounded-md border bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      ← newer
                    </Link>
                  ) : <span />}
                  {currentPage < totalPages ? (
                    <Link
                      href={`/blog?${new URLSearchParams({ ...(tag ? { tag } : {}), ...(search ? { search } : {}), page: String(currentPage + 1) }).toString()}`}
                      className="inline-flex items-center rounded-md border bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      older →
                    </Link>
                  ) : <span />}
                </nav>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
} 

export default function BlogPage({ searchParams }: { searchParams: Promise<{ tag?: string; search?: string; page?: string }> }) {
  const { tag, search, page } = use(searchParams);
  return (
    <Suspense>
      <BlogList tag={tag} search={search} page={page} />
    </Suspense>
  );
}