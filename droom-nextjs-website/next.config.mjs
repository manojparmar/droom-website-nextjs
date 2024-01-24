/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn1.acedms.com', 'daisyui.com'],
    },
    theme: {
        extend: {
          colors: {
            customBlue: '#3490dc',
          },
        },
      },
};

export default nextConfig;
