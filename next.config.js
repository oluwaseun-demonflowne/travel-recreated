/** @type {import('next').NextConfig} */
const nextConfig = {
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
