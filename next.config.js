/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Change '/ix-originals' to match your GitHub repo name.
  // If you're using a custom domain, remove the basePath line entirely.
  basePath: '/ix-originals',
}

module.exports = nextConfig
