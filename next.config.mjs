/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'https://simter-mc.ru/',
				port: '',
				pathname: '**',
			},
		],
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
