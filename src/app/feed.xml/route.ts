import { allPosts, Post } from 'contentlayer/generated';

export const runtime = 'edge';

export async function GET() {
  const site = process.env.SITE_URL || 'https://zakkann.com';
  const items = allPosts
    .filter((p: Post) => !p.draft)
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p: Post) => `
      <item>
        <title>${escapeXml(p.title)}</title>
        <link>${site}${p.url}</link>
        <guid>${site}${p.url}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description>${escapeXml(p.excerpt)}</description>
      </item>
    `)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Zak Kann – Blog</title>
      <link>${site}/blog</link>
      <description>AI automation and internal tools for SMBs</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

