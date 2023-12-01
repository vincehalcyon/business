/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./components/partials/ImageLoader.jsx",
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_TENANT_S3_HOSTNAME,
        port: "",
        pathname: `/**`,
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: `/vi/**`,
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mybusiness-home',
        permanent: true, // Set to false if you want temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
