'use client'

import Header from '@/admin-scenes/Header'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { Box, Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './styles.css'

const PriceListAdmin = () => {
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/api/admin/getPriceList', {
				headers: {
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache',
					Expires: '0',
				},
			}).then(res => {
				setIsLinkReady(true)
			})
			// setIsLinkReady(result.data)
		}
		fetchData()
	}, [])

	const [isLinkReady, setIsLinkReady] = useState<boolean>(false)

	return (
		<Box>
			<Header
				title='Прайс-лист'
				subtitle='Скачивание актуального прайс-листа'
			/>
			<Box m='40px 0 0 10px' height='75vh'>
				{isLinkReady ? (
					<Link
						href='/upload/pricelist/price.png'
						className='download-price'
						target='_blank'
						locale={false}
						download
					>
						<FileDownloadIcon />
						<span>Скачать прайс-лист</span>
					</Link>
				) : (
					<Button
						variant='contained'
						size='large'
						startIcon={
							<CircularProgress
								style={{ color: '#fff', marginRight: '10px' }}
							/>
						}
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
					>
						<span>Генерация прайса</span>
					</Button>
				)}
			</Box>
		</Box>
	)
}
export default PriceListAdmin
