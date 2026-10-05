import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Avoid shipping Next's feature-detected legacy shim in modern browser bundles.
const emptyPolyfillModule = "./utils/empty-polyfill.js";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": { browser: emptyPolyfillModule },
      "../build/polyfills/polyfill-module.js": { browser: emptyPolyfillModule },
      "next/dist/build/polyfills/polyfill-module": { browser: emptyPolyfillModule },
      "next/dist/build/polyfills/polyfill-module.js": { browser: emptyPolyfillModule },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...["isla-de-pajaros-y-manglares", "isla-de-os-pajaros-y-manglares"].map((slug) => ({
        source: `/blog/${slug}`,
        destination: "/blog/isla-de-los-pajaros-y-manglares",
        permanent: true,
      })),
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/inicio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/promociones",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/promociones.html",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/operador-turistico",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
