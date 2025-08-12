/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zakkann.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*'],
  additionalPaths: async () => {
    const paths = [];
    
    // Ensure blog index is included
    paths.push({
      loc: `/blog`,
      changefreq: 'daily',
      priority: 0.7,
    });

    // Add blog posts
    try {
      // Prefer the public import alias that Contentlayer exposes
      const { allPosts } = await import('contentlayer/generated');
      allPosts
        .filter((post) => !post.draft)
        .forEach((post) => {
          const lastmod = post.updated || post.date;
        paths.push({
          loc: `/blog/${post.slug}`,
          lastmod,
          changefreq: 'weekly',
          priority: 0.8,
        });
        });
    } catch {
      console.warn('Could not load blog posts for sitemap');
    }
    
    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}; 