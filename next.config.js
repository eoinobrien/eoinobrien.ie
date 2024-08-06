const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      // old posts before date was removed from the URL
      {
        source: "/posts/2024-07-02-another-luas-app",
        destination: "/posts/another-luas-app",
        permanent: true,
      },
      {
        source: "/posts/2021-12-29-historical-luas-real-time-data",
        destination: "/posts/historical-luas-real-time-data",
        permanent: true,
      },
      {
        source: "/posts/2022-03-02-podman-on-wsl2",
        destination: "/posts/podman-on-wsl2",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
