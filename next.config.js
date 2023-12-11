/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    images: {
        domains: ['img.clerk.com','utfs.io'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'uploadthing.com',
              port: '',
              pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
