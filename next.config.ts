import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true, // Optional but recommended
    images: {
        domains: ['fakestoreapi.com'], // Add the external image domain here
    },
};

export default nextConfig;
