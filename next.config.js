/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploadthing.com','utfs.io'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'uploadthing.com',
              port: '',
              pathname: '',
            },
        ],
    }
}

module.exports = nextConfig
