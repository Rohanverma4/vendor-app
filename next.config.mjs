import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        customKey: 'my-value',
    },
};

export default withNextVideo(nextConfig);