/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zakkann.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*'],
  additionalPaths: async () => {
    const paths = [];
    
    // Add blog posts
    try {
      const { allPosts } = await import('./.contentlayer/generated');
      allPosts.forEach((post) => {
        paths.push({
          loc: `/blog/${post.slug}`,
          lastmod: post.date,
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