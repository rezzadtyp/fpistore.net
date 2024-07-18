/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**",
            },
        ],
    },
    async redirects() {
        return [
            // {
            //     source: "/",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            {
                source: "/products",
                destination: "/maintenance",
                permanent: false,
            },
        ]
    },
}

export default nextConfig
