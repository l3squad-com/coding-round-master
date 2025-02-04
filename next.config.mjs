/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<coding-round-master>',
    assetPrefix: isDev ? '' : '/<coding-round-master>',
};

export default nextConfig;