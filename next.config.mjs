import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  siteUrl: 'https://caps-code.vercel.app',
  generateRobotsTxt: true,

  /** @type {import('next').NextConfig} */
  nextConfig: {
    images: {
      domains: ['images.unsplash.com'],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  },
});
