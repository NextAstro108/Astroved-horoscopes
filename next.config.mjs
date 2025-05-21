
/** @type {import('next').NextConfig} */
const nextConfig = {

  basePath: '',
  images: {
    domains: ['phplexus.astroved.com', 'www.astroved.com', 'cdn.astroved.com','qa.astroved.com','qaphplexus.astroved.com','nxtlexus.astroved.com','qanxtlexus.astroved.com'], // Add allowed domains here
  },
  productionBrowserSourceMaps: true,
  
};

export default nextConfig;

