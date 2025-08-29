// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**', // allow all paths from Unsplash
//       },
//     ],
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        pathname: '/**', // allow all paths from readdy.ai
      },
         {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**', // allow all paths from readdy.ai
      },
    ],
  },
};

export default nextConfig;


