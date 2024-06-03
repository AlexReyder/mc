import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Полимерный микроцемент',
	description:
		'Полимерный микроцемент идеальный материал для отделки и дизайна.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
