/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "client-s3-images.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
