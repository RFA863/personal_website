/** @type {import('next').NextConfig} */

const nextConfig = {}
const { withNextVideo } = require('next-video/process');
// import withNextVideo from "next-video/process";

module.exports = nextConfig
module.exports = withNextVideo(nextConfig);
