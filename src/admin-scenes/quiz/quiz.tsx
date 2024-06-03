import Header from '@/admin-scenes/Header'
import { ErrorOutline } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { Box, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import { useRef, useState } from 'react'

const QuizAdm = () => {
	const [status, setStatus] = useState('')
	const inportExcel = useRef(null)
	const handleInput = () => {
		inportExcel?.current?.click()
	}

	const handleFileUpload = (event: any) => {
		event.preventDefault()

		const fileObj = event.target.files && event.target.files[0]
		if (!fileObj) {
			return
		}

		let formData = new FormData()
		formData.append('file', event.target.files[0])
		setStatus('loading')

		axios
			.post('/api/quiz/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				setStatus('loaded')
			})
			.catch(err => {
				setStatus('error')
				console.log(err)
			})
	}

	return (
		<Box>
			<Header title='Квиз' subtitle='Загрузите презентацию' />
			<Box m='40px 0 0 10px' height='75vh'>
				<Button
					variant='contained'
					onClick={handleInput}
					sx={{ mb: '5px' }}
					startIcon={
						status === '' ? (
							<FileUploadIcon />
						) : status === 'loading' ? (
							<CircularProgress
								color='secondary'
								style={{ width: '16px', height: '16px' }}
							/>
						) : status === 'loaded' ? (
							<CheckIcon />
						) : (
							<ErrorOutline />
						)
					}
				>
					Загрузить презентацию
				</Button>
				<input
					type='file'
					ref={inportExcel}
					name='file'
					onChange={handleFileUpload}
					className='modal__upload'
					style={{
						opacity: '0',
						visibility: 'hidden',
					}}
				/>
			</Box>
		</Box>
	)
}
export default QuizAdm
