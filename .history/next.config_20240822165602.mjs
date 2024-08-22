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
      {
        source: "/qris",
        destination: "https://app.midtrans.com/payment-links/1724320443138",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
