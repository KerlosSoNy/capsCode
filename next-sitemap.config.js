/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://capscode.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000, 
  changefreq: 'daily', 
  priority: 0.7,
  additionalPaths: async (config) => [
    { loc: '/services', changefreq: 'weekly', priority: 0.8 },
    { loc: '/about-us', changefreq: 'weekly', priority: 0.8 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.8 },
    { loc: '/contact-us', changefreq: 'weekly', priority: 0.8 },
  ],
};