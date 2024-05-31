import axios from 'axios'
import { useEffect, useState } from 'react'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import ErrorIcon from '@mui/icons-material/Error'
import { CircularProgress } from '@mui/material'
import cls from './product.module.scss'

interface UploadImageI {
	defaultStatus: string
	folderName: string
	type: string
	returnData: (data: any) => void
	clearOutputData: boolean
}

const UploadImageObject = ({
	defaultStatus,
	folderName,
	type,
	returnData,
	clearOutputData,
}: UploadImageI) => {
	const [status, setStatus] = useState(defaultStatus)
	const [data, setData] = useState(null)
	const [imgUrl, setImgUrl] = useState('')
	useEffect(() => {
		setData(null)
		setImgUrl('')
		setStatus('upload')
	}, [clearOutputData])

	async function handleUploadHouseImage(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setStatus('loading')

		if (!event.target.files) return

		let formData = new FormData()
		formData.append('file', event.target.files[0])
		formData.append('objectUploadType', 'object')
		formData.append('folderName', folderName)
		formData.append('objectType', type)

		await axios
			.post('/api/admin/uploadImages', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				setImgUrl(res.data.images[0])
				setData(res.data)
				returnData(res.data)
				setStatus('loaded')
			})
			.catch(err => {
				setStatus('error')
				console.log(err)
			})
	}
	return (
		<div className={cls.ModalWrapperObject}>
			<label
				htmlFor='house'
				className={cls.ModalPaper}
				style={{ backgroundImage: `url("${imgUrl !== '' ? imgUrl : ''}")` }}
			>
				{status === 'upload' ? (
					<DriveFolderUploadIcon className='modal__icon-upload' />
				) : status === 'loading' ? (
					<CircularProgress />
				) : status === 'loaded' ? null : (
					<ErrorIcon className='modal__icon-error' />
				)}
				{type ? (
					<input
						type='file'
						name='house'
						id='house'
						className={cls.ModalUpload}
						onChange={handleUploadHouseImage}
					/>
				) : null}
			</label>
			<p className={cls.ModalTitle}>
				{status === 'loaded' ? 'Объект' : 'Загрузить объект'}
			</p>
		</div>
	)
}
export default UploadImageObject
