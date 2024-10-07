/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.imgflip.com',
        },
        {
            protocol: 'http',
            hostname: 'w7.pngwing.com',
        }
    ]
}
}
;

export default nextConfig;
