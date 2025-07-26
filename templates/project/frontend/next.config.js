/** @type {import('next').NextConfig} */
const nextConfig = { // NOTE: we use next@15.1.1-canary.24 due to internal error. https://github.com/vercel/next.js/issues/71974
  reactStrictMode: true, // TODO: Figure out if it works with react strict mode on or not
  images: { minimumCacheTTL: 60, }, // https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/
  //compiler: { removeConsole: { exclude: ["error"],},}, // Issue with Next.js 15: https://github.com/vercel/next.js/issues/71974
  async headers() {
    return [{ source: "/(.*)", headers: [ { key: "Cross-Origin-Opener-Policy", value: "same-origin", }, { key: "Cross-Origin-Embedder-Policy", value: "require-corp",},],},]
  }, // This eliminates the Google Sign-in / Sign-up error where it says the Cross Origin is disallowed. See also: https://github.com/vercel/next.js/discussions/51135
}
module.exports = nextConfig