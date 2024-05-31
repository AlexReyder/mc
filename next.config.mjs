/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.DOMAIN],
		formats: ['image/avif', 'image/webp'],
	},
	env: {
		domainUrl: process.env.DOMAIN,
		emailUser: process.env.EMAIL_LOGIN,
		emailPass: process.env.EMAIL_PASS,
	},
	// cacheBust: true,
	typescript: {
		ignoreBuildErrors: true,
	},
}

export default nextConfig
