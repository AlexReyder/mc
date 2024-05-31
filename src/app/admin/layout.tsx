'use client'
import { isAuthenticated } from '@/admin-scenes/Auth'
import theme from '@/admin-scenes/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import Sidebar from '../../admin-scenes/global/Sidebar'
import './style.css'

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<div className='app'>
					{isAuthenticated ? <Sidebar /> : null}
					{/* <Sidebar /> */}
					<main className='content'>{children}</main>
				</div>
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
}
