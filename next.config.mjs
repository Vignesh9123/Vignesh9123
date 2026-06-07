/** @type {import('next').NextConfig} */
import { withContentCollections } from "@content-collections/next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default withContentCollections(nextConfig);
