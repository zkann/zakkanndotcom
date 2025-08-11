import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
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
          background: '#0b5cff',
          color: 'white',
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 52, opacity: 0.9 }}>Zak Kann</div>
        <div style={{ marginTop: 12 }}>Fractional CTO + Automation</div>
        <div style={{ fontSize: 28, opacity: 0.9, marginTop: 20 }}>zakkann.com</div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}

