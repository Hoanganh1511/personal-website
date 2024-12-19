/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "cdnmedia.vtcgame.vn",
      "phidoi.vtcgame.vn",
      "cdn-icons-png.flaticon.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "baodienbien.xembao.vn",
      "cdn-i.vtcnews.vn",
      "vtcgame.vn",
    ],
  },
};

export default nextConfig;
