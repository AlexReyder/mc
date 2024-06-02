/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'qr.wedraft.ru',
				port: '300',
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
