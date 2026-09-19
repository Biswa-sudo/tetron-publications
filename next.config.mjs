/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  /* config options here */
  // Ensure static export creates folders so `/admin-dashboard/` resolves
  // to `/admin-dashboard/index.html` on static hosts.
  trailingSlash: true,
  //  
};

export default nextConfig;
