import { ImageResponse } from 'next/og';
import { allPosts, Post } from 'contentlayer/generated';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  const title = post?.title ?? 'Blog Post';
  return [{ id: slug, alt: title, size }];
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  const title = post?.title ?? 'Blog Post';
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#111827',
          color: 'white',
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.85 }}>Zak Kann – Blog</div>
        <div style={{ marginTop: 16, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontSize: 24, opacity: 0.85, marginTop: 20 }}>zakkann.com</div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}

