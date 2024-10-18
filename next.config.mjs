import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

module.exports = {
    siteUrl: 'https://yourdomain.com', // Replace with your actual site URL
    generateRobotsTxt: true,
  }

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default withNextIntl(nextConfig);