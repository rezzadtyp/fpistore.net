/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/maintenance",
                permanent: false,
            },
            {
                source: "/home",
                destination: "/maintenance",
                permanent: false,
            },
            {
                source: "/products",
                destination: "/maintenance",
                permanent: false,
            },
        ]
    },
}

export default nextConfig
