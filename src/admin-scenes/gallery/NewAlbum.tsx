import axios from 'axios'
import { useEffect, useState } from 'react'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import ErrorIcon from '@mui/icons-material/Error'
import { CircularProgress } from '@mui/material'

interface NewAlbumI {
	defaultStatus: string
	resizeFile: any
	innerId: any
	albumName: string
	returnData: (data: any) => void
	clearOutputData: boolean
}

export default function NewAlbum({
	defaultStatus,
	resizeFile,
	innerId,
	albumName,
	returnData,
	clearOutputData,
}: NewAlbumI) {
	const [status, setStatus] = useState(defaultStatus)
	const [data, setData] = useState(null)
	useEffect(() => {
		setData(null)
		setStatus('upload')
	}, [clearOutputData])

	async function handleUploadHouseImage(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setStatus('loading')

		if (!event.target.files) return

		const original_img = await resizeFile(event.target.files[0], 1920, 1080)

		let formData = new FormData()
		formData.append('original', original_img)
		formData.append('innerId', innerId)
		formData.append('albumName', albumName)

		await axios
			.post('/api/admin/gallery/uploadImages', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				console.log(res.data)
				setData(res.data)
				returnData(res.data)
				setStatus('upload')
			})
			.catch(err => {
				setStatus('error')
				console.log(err)
			})
	}
	return (
		<div>
			<label htmlFor='house' className='modal__paper'>
				{status === 'upload' ? (
					<DriveFolderUploadIcon className='modal__icon-upload' />
				) : status === 'loading' ? (
					<CircularProgress />
				) : status === 'loaded' ? null : (
					<ErrorIcon className='modal__icon-error' />
				)}
				{albumName && innerId ? (
					<input
						type='file'
						name='house'
						id='house'
						className='modal__upload'
						accept='image/jpeg'
						onChange={handleUploadHouseImage}
					/>
				) : null}
			</label>
			<p className='modal__title'>Загрузить изображение</p>
		</div>
	)
}
