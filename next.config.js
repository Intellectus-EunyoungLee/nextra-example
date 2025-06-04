const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "nextra-example" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/nextra-example/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig);
