/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/maintenance",
                permanent: false,
            },
        ]
    },
}

export default nextConfig
