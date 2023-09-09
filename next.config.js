/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const {
  GITHUB_APP_CLIENT_ID,
  GITHUB_APP_CLIENT_SECRET,
  NEXT_PUBLIC_GRAPHQL_GATEWAY,
  NEXTAUTH_SECRET,
  NODE_ENV,
} = process.env;

const isDev = NODE_ENV !== 'production';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: isDev ? 'debug' : 'short',
});

const nextConfig = withPlugins([withVanillaExtract], {
  reactStrictMode: true,

  env: {
    GITHUB_APP_CLIENT_ID,
    GITHUB_APP_CLIENT_SECRET,
    NEXTAUTH_SECRET,
    NEXT_PUBLIC_GRAPHQL_GATEWAY: isDev
      ? 'http://127.0.0.1:3000/graphql'
      : NEXT_PUBLIC_GRAPHQL_GATEWAY,
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  images: {
    domains: ['avatars.githubusercontent.com'],
  },

  async rewrites() {
    return isDev
      ? [
          {
            source: '/graphql',
            destination: NEXT_PUBLIC_GRAPHQL_GATEWAY,
          },
        ]
      : [];
  },
});

module.exports = nextConfig;
