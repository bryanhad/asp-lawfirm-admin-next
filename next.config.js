/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client"],
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.pixabay.com" },
            { protocol: "https", hostname: "utfs.io" },
        ],
    },
}

module.exports = nextConfig
