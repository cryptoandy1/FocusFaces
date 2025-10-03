/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "zaw6rmewfth64q1k.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
